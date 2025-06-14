fetch('portofolio.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('portfolio-container');
    container.innerHTML = '';
    data.forEach(item => {
      const el = document.createElement('div');
      el.className = 'portfolio-item';
      el.innerHTML = `
        <img src="${item.gambar}" alt="${item.judul}">
        <p>${item.judul}</p>
      `;
      container.appendChild(el);
    });
  });