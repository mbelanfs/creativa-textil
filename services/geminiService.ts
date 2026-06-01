
/**
 * Browser client: forwards prompt to serverless proxy at /api/gemini
 * so the GEMINI_API_KEY never ends up in the client bundle.
 */
export const getArtisanAdvice = async (prompt: string) => {
  try {
    const resp = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!resp.ok) {
      console.error('Gemini proxy responded with', resp.status);
      return 'Disculpe, parece que mi taller virtual está un poco saturado. ¿Podría consultarme de nuevo en un momento?';
    }

    const data = await resp.json();
    return data?.text || '';
  } catch (err) {
    console.error('Error contacting Gemini proxy:', err);
    return 'Disculpe, parece que mi taller virtual está un poco saturado. ¿Podría consultarme de nuevo en un momento?';
  }
};
