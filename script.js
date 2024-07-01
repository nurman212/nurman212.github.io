document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dari submit secara default

    // Mengambil nilai input dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    // Membuat pesan konfirmasi
    const confirmationMessage = `Thank you ${name} for booking at ${hotel}. 
                                 Your check-in date is ${checkin} and check-out date is ${checkout}. 
                                 A confirmation email has been sent to ${email}.`;

    // Menampilkan pesan konfirmasi
    document.getElementById('booking-confirmation').innerText = confirmationMessage;
});
