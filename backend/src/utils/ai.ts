import { CohereClientV2 } from "cohere-ai";

const cohere = new CohereClientV2({
  token: "LjwyfPIhaZcapBT6Xz6VCIHBKzcRvbRew2uFl379",
});


export async function getAIResponse(data: any): Promise<string | undefined> {
  try {
    const response = await cohere.chat({
      model: "command-r-plus",
      messages: [
        {
          role: "assistant",
          content:
            "You are an ESG Data Specialist. You analyze ESG (Environmental, Social, and Governance) data and provide insights to help users understand its significance and investment potential.",
        },
        {
          role: "user",
          content: `Please help me analyze the company data and suggest if I should invest in the stock: ${JSON.stringify(
            data
          )}`,
        },
      ],
    });

    return response.message?.content?.[0]?.text ?? "No response received.";
    // Adjust based on actual API response structure
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error occurred";
  }
}
