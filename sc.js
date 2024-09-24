        const video = document.getElementById('myVideo');
        
        // Mengatur agar video diputar ulang
        video.addEventListener('ended', function() {
            video.currentTime = 0;
            video.play();
        }, false);
        
        // Mencegah opsi download muncul saat diklik dan ditahan
        video.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        }, false);