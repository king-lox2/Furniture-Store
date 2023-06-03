const fetchData = async (allUrl, element) => {
  element.innerHTML = `
    <main class="loader">
        <div class="load"></div>
      </main>
    `;
  try {
    const response = await fetch(allUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    element.innerHTML = `<main >
    <h3 class='error-msg'>Ooops.... an error has been detected check your network connection</h3>
    </main>`;
  }
};

export default fetchData;
