const dotenv = require("dotenv");
dotenv.config();
const { OpenAI } = require("openai");
const openai = new OpenAI();


async function respond(imgURL, query) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4-vision-preview",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: query },
                        { type: "image_url", image_url: { "url": imgURL, } },
                    ],
                },
            ],
            "max_tokens": 300
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error:", error);
    }
}
/**
 * VisionFramework provides methods for analyzing images and generating descriptions, tags, captions, alt text, and stories.
 */
class VisionFramework {
    constructor() {
        if (!process.env.OPENAI_API_KEY) {
            throw new Error("No OPENAI_API_KEY provided");
        }

        this.apiKey = process.env.OPENAI_API_KEY;
        this.openai = new OpenAI(apiKey);
    }

    /**
     * Analyzes an image and generates a description.
     * @param {string} imgURL - The URL of the image to analyze.
     * @returns {Promise<string>} A promise that resolves to the description of the image.
     */
    async analyzeImageDescription(imgURL) {
        const description = await respond(imgURL, "Generate a description for this image and only output it. Try to keep it under 100 tokens");
        return description;
    }

    /**
     * Generates tags for an image.
     * @param {string} imgURL - The URL of the image to generate tags for.
     * @returns {Promise<string[]>} A promise that resolves to an array of tags for the image.
     */
    async generateImageTags(imgURL) {
        const tags = await respond(imgURL, "Generate tags for this image in an array and only output it. Try to keep it under 100 tokens");
        return tags;
    }

    /**
     * Answers a query about an image.
     * @param {string} imgURL - The URL of the image to query.
     * @param {string} query - The query about the image.
     * @returns {Promise<string>} A promise that resolves to the answer of the query about the image.
     */
    async answerQueryOfImage(imgURL, query) {
        const response = await respond(imgURL, query, "Answer a query about this image and only output it. Try to keep it under 100 tokens");
        return response;
    }

    /**
     * Generates a caption for an image.
     * @param {string} imgURL - The URL of the image to generate a caption for.
     * @returns {Promise<string>} A promise that resolves to the caption of the image.
     */
    async generateCaption(imgURL) {
        const caption = await respond(imgURL, "Generate a caption for this image and only output it. Try to keep it under 100 tokens");
        return caption;
    }

    /**
     * Generates alternative text for an image.
     * @param {string} imgURL - The URL of the image to generate alt text for.
     * @returns {Promise<string>} A promise that resolves to the alt text of the image.
     */
    async generateAltText(imgURL) {
        const altText = await respond(imgURL, "Generate alt text for this image and only output it. Try to keep it under 100 tokens");
        return altText;
    }

    /**
     * Creates a story from images.
     * @param {string} imgURL - The URL of the images to create a story from.
     * @returns {Promise<string>} A promise that resolves to the story created from the images.
     */
    async createStoryFromImages(imgURL) {
        const story = await respond(imgURL, "Create a story from these images and only output it. Try to keep it under 100 tokens");
        return story;
    }
}

module.exports = VisionFramework;
