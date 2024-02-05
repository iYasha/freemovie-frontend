export default new Promise((res) => {
    /*
    THIS PIECE OF SHIT LOAD GOOGLEAPIS FONT EVERYTIME YOU LOAD IT
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">
     */
    const script = document.createElement('script');
    script.onload = () => res();
    script.setAttribute(
        'src',
        '/playerjs5.js'
    );
    document.head.appendChild(script);
});