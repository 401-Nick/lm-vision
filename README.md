# VisionFramework

VisionFramework is a Node.js library that leverages the OpenAI API, specifically the GPT-4-Vision model, to analyze images and generate useful text-based outputs such as descriptions, tags, captions, alt text, and stories from images. It provides an easy-to-use interface for integrating advanced image analysis and text generation capabilities into your projects.

## Features

- **Image Descriptions:** Generate detailed descriptions of images.
- **Image Tags:** Create a list of tags relevant to an image.
- **Query Answers:** Answer specific queries about an image.
- **Image Captions:** Produce concise captions for images.
- **Alt Text Generation:** Generate alternative text for images for accessibility.
- **Story Creation:** Create narrative stories from a series of images.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- An OpenAI API key with access to the GPT-4-Vision model.

## Installation

To use VisionFramework in your project, follow these steps:

1. Clone this repository or download the source code.
2. Navigate to the project directory and install the dependencies:
    ```bash
    npm install @_401_nick/lm-vision
    ```
3. Create a `.env` file in the project root and add your OpenAI API key:
    ```plaintext
    OPENAI_API_KEY=your_openai_api_key_here
    ```

## Usage

Here's how to use VisionFramework in your project:

1. Import the `VisionFramework` class from the module.
    ```javascript
    const VisionFramework = require('./VisionFramework');
    ```
2. Create an instance of the `VisionFramework`.
    ```javascript
    const vision = new VisionFramework();
    ```
3. Call the methods provided by the `VisionFramework` instance to analyze images and generate text. Here are some examples:
    ```javascript
    // Generate an image description
    vision.analyzeImageDescription('https://example.com/image.jpg')
        .then(description => console.log(description))
        .catch(error => console.error(error));

    // Generate tags for an image
    vision.generateImageTags('https://example.com/image.jpg')
        .then(tags => console.log(tags))
        .catch(error => console.error(error));
    ```