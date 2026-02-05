const ENDPOINT = 'https://script.google.com/macros/s/AKfycbzxmuV6O-jhKR1SbbWdsT9IPDFE3LlM6fOSGljp98eNrIWCHNW28h5i0xvs-sx40aIm/exec'
let token = new URLSearchParams(window.location.search).get('token');


function absen(tipe) {
navigator.geolocation.getCurrentPosition(pos => {
fetch(ENDPOINT, {
method: 'POST',
body: JSON.stringify({
action: 'absen',
tipe: tipe,
token: token,
nik: nik.value,
nama: nama.value,
departemen: departemen.value,
line: line.value,
lat: pos.coords.latitude,
lng: pos.coords.longitude
})
}).then(r => r.json()).then(res => alert(res.message));
});
}