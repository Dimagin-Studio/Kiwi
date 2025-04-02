export function Div({ source, alt, title, content }) {
  const lien = "../images/";
  return (
    <div className="flex flex-col items-center">
      <img src={`../images/${source}`} alt={alt} className="w-16 h-16 mb-4" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{content}</p>
    </div>
  );
}
