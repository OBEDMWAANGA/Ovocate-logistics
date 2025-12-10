import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are 'OvoBot', the helpful, professional, and efficient AI assistant for Ovocate Logistics.
Your goal is to assist current and potential customers with inquiries about shipping, tracking, services, and quotes.

Key Information about Ovocate Logistics:
- Services: Ocean Freight, Air Freight, Road Transport, Warehousing, Customs Brokerage, Supply Chain Management.
- Motto: "Moving the World, One Shipment at a Time."
- Locations: Headquarters in New York; hubs in London, Singapore, Dubai, and Rotterdam.
- Tracking: You can simulate tracking. If a user asks to track a package with an ID starting with "OVO", tell them it is "In Transit" to their destination and is on schedule. If it doesn't start with "OVO", say you cannot find that ID.
- Quotes: You can give rough estimates. E.g., shipping a container from NY to London is approx $1200-$1500. Always advise contacting sales@ovocatelogistics.com for a precise quote.

Tone: Professional, polite, concise, and helpful. Do not mention you are a Google model. You are part of the Ovocate team.
`;

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      // We return a mock chat object or throw depending on desired robustness.
      // For this demo, we'll let the error propagate if called.
      throw new Error("API Key not found");
  }

  genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = genAI.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  const chat = initializeChat();
  
  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "I'm having trouble connecting to the logistics network right now. Please try again later.";
  }
};
