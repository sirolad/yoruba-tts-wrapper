import axios from 'axios'
import fs from 'fs'
import path from 'path'

async function generateSpeech(text, apiKey, outputPath) {
    const url = process.env.TTL_MODEL_URL
    const headers = {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
    }
    const data = {
        inputs: text,
        options: {
            wait_for_model: true,
        },
    }
    const filePath = path.resolve(outputPath)

    try {
        const response = await axios.post(url, data, {
            headers,
            responseType: 'arraybuffer',
        })
        await fs.promises.writeFile(filePath, response.data)
        console.log('Audio file saved:', filePath)
    } catch (error) {
        console.error(
            'Error in generating speech:',
            error.response ? error.response.data : error.message
        )
    }
}

module.exports = generateSpeech
