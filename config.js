// Conexión pública a Supabase (llave publicable: solo puede llamar a las funciones conf_*).
window.CONF_API = {
  url: "https://laskydhitnaovxfksthd.supabase.co",
  key: "sb_publishable_cK7UIZIHNYw4bf0APnUmiw_nNwOE9Yx",
};

window.rpc = async function (fn, args) {
  const res = await fetch(`${CONF_API.url}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: {
      apikey: CONF_API.key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return res.json();
};
