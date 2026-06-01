
// Lightweight local fallback for artisan advice.
// This avoids any external AI dependency. It returns a small, friendly message
// based on the user's prompt.
export const getArtisanAdvice = async (prompt: string) => {
  if (!prompt || !prompt.trim()) return 'Por favor escribe tu consulta.';
  // Very small heuristic responses for common queries.
  const q = prompt.toLowerCase();
  if (q.includes('bolso') || q.includes('bag') || q.includes('bag')) {
    return 'Para un bolso de seda, elige forro de algodón y remates reforzados; evita el contacto prolongado con agua.';
  }
  if (q.includes('talla') || q.includes('size') || q.includes('medida')) {
    return 'Mide la prenda en plano y compara con una prenda que te quede bien; para niños añade 2 cm de margen para crecimiento.';
  }
  if (q.includes('material') || q.includes('tejido') || q.includes('fabric')) {
    return 'Las fibras naturales como lino y algodón respiran mejor; para piezas de ceremonia considera seda o brocado.';
  }
  // Default friendly reply
  return 'Gracias por tu pregunta — en nuestro taller recomendamos materiales nobles y acabados artesanales; escríbenos más detalles para una respuesta personalizada.';
};
