import { GoogleGenAI } from '@google/genai';

// Plain serverless handler (no Next types) so this file doesn't require the
// `next` package. Hosts like Vercel and Netlify accept a default-exported
// function with (req, res) signature.
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt, temperature } = req.body || {};
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  if (!apiKey) {
    console.error('No GEMINI_API_KEY configured in environment');
    return res.status(500).json({ error: 'Server not configured' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are "Elvira", the master artisan behind "Creativa Textil Artesanal". 
        Your workshop is located in the heart of Valencia. 
        You speak with elegance, warmth, and deep knowledge of tailoring.
        
        Specialties:
        1. "Dressitos": High-quality handmade baby wear using 100% natural fibers (linen, organic cotton, merino wool).
        2. "Fallastyle": Exclusive accessories using authentic Valencian silk (espolín, damasco) from the Fallas tradition.
        3. "Professional Alterations": Expert tailoring that respects the original garment's construction.
        
        Style guidelines:
        - Use a welcoming, sophisticated tone.
        - Reference Valencian craftsmanship and history when relevant (e.g., mention the Lonja de la Seda or traditional weaving techniques).
        - Provide styling advice and sizing help.
        - Keep responses concise but evocative.
        - Respond in the language used by the customer.`,
        temperature: typeof temperature === 'number' ? temperature : 0.8,
      },
    });

    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error('Gemini proxy error:', error);
    return res.status(500).json({ error: 'Gemini API Error' });
  }
}
