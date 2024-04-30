# Yoruba Text-to-Speech Package

A simple Node.js package to generate speech from text using the [Meta's mms-tts-yor model](https://huggingface.co/facebook/mms-tts-yor) on [HuggingFace](https://huggingface.co) API.
It is also possible to make use of another model which might be more advance than this one.

## Installation

```bash
npm install yoruba-tts
````

## Usage
Remember to get your API token from [HuggingFace](https://huggingface.co/settings/tokens)
and put in the .env file in the root of your project.

```.dotenv
TTS_MODEL_URL=https://api-inference.huggingface.co/models/facebook/mms-tts-yor
HUGGINGFACE_API_KEY=
```

```javascript
import { generateSpeech } from 'yoruba-tts'

const text = "Mo fẹ́ràn Èdè Yorùbá";
const outputPath = "./output.flac";
generateSpeech(text, outputPath);
```
The output will be a flac file in the location specified. 

## Sample Audio
Sample Audio: [feran.flac](assets/feran.flac)

## Credit 
The credit for the model belongs to Vineel Pratap et al. from Meta AI.
```bash
@article{pratap2023mms,
    title={Scaling Speech Technology to 1,000+ Languages},
    author={Vineel Pratap and Andros Tjandra and Bowen Shi and Paden Tomasello and Arun Babu and Sayani Kundu and Ali Elkahky and Zhaoheng Ni and Apoorv Vyas and Maryam Fazel-Zarandi and Alexei Baevski and Yossi Adi and Xiaohui Zhang and Wei-Ning Hsu and Alexis Conneau and Michael Auli},
    journal={arXiv},
    year={2023}
}

```

## Contact
The author can be contacted for feedback at [Surajudeen Akande](sirolad@gmail.com)

## License

[MIT License ](LICENSE.md)

