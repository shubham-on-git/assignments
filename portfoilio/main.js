class MyHeader extends HTMLElement{
    connectedCallBack(){
        this.innerHTML=` <header>
        <nav>
        <img src="../Images/home-icon.png" style="width: 25px; height: 25px; float: left; padding: 10px;">
        <ul class="topnav">
            <li><a href="../Home/home.html">Home</a></li>
            <li><a href="../portfolio/portfolio.html">Portfolio</a></li>
            <li><a href="../About/about.html">About</a></li>
            <li><a href="../services/services.html">Services</a></li>
            <li><a href="../Contact/contact.html">Contact Me</a></li>
        </ul>
        <nav>
    </header>`
    }
}
customElements.define('my-header', MyHeader)