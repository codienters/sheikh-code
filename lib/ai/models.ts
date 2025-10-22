import { gemini } from "./providers";

export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "Grok Vision",
    description: "Advanced multimodal model with vision and text capabilities",
  },
  {
    id: "chat-model-reasoning",
    name: "Grok Reasoning",
    description:
      "Uses advanced chain-of-thought reasoning for complex problems",
  },
  {
    id: gemini("gemini-2.5-pro").provider.id,
    name: "Gemini 2.5 Pro",
    description: "Most capable model for complex tasks (64K output tokens)",
  },
  {
    id: gemini("gemini-2.5-flash").provider.id,
    name: "Gemini 2.5 Flash",
    description: "Faster model for simpler tasks (64K output tokens)",
  },
];
