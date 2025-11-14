/* GLOBAL */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

:root {
    --bg: #0d0d0d;
    --text: #ffffff;
    --primary: #ff3c00;
    --card: #1a1a1a;
    --glass: rgba(255,255,255,0.1);
}

body.light {
    --bg: #f2f2f2;
    --text: #111;
    --card: #ffffff;
    --glass: rgba(0,0,0,0.07);
}

body {
    background: var(--bg);
    color: var(--text);
    transition: 0.4s ease;
}

/* HEADER */
header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--glass);
    backdrop-filter: blur(12px);
    z-index: 1000;
}

.logo {
    font-size: 30px;
    font-weight: 700;
}
.logo span {
    color: var(--primary);
}

nav ul {
    display: flex;
    gap: 30px;
    list-style: none;
}

nav a {
    color: var(--text);
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
}
nav a:hover {
    color: var(--primary);
}

.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.mode-toggle {
    background: none;
    border: none;
    font-size: 20px;
    color: var(--text);
    cursor: pointer;
}

.menu-btn {
    display: none;
    font-size: 26px;
    cursor: pointer;
}

/* MOBILE MENU */
.mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 260px;
    height: 100vh;
    background: var(--card);
    padding: 40px 20px;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    gap: 25px;
    z-index: 2000;
}
.mobile-menu a {
    color: var(--text);
    font-size: 18px;
    text-decoration: none;
}
.mobile-menu .close-menu {
    font-size: 28px;
    align-self: flex-end;
    cursor: pointer;
}

/* BUTTON */
.btn {
    padding: 10px 22px;
    background: var(--primary);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
}
.btn:hover {
    background: #ff572b;
}

/* HERO */
.hero {
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1') 
        center/cover no-repeat;
    display: flex;
    align-items: center;
    padding-left: 60px;
    position: relative;
}
.hero .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
}
.hero-content {
    position: relative;
    max-width: 550px;
}
.hero h1 {
    font-size: 65px;
    line-height: 1.1;
}
.hero h1 span {
    color: var(--primary);
}
.hero p {
    margin: 20px 0;
    font-size: 18px;
}

/* PROGRAMS */
.programs {
    padding: 90px 50px;
    text-align: center;
}
.program-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 60px;
}
.program-card {
    background: var(--card);
    padding: 30px;
    width: 290px;
    border-radius: 10px;
    text-align: center;
    transition: 0.4s;
}
.program-card:hover {
    transform: translateY(-10px);
}
.program-card i {
    font-size: 40px;
    color: var(--primary);
    margin-bottom: 15px;
}

/* PRICING */
.pricing {
    padding: 90px 50px;
    text-align: center;
}
.pricing-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 60px;
}
.price-card {
    background: var(--card);
    padding: 30px;
    width: 280px;
    border-radius: 10px;
    position: relative;
}
.price-card.featured {
    border: 2px solid var(--primary);
}
.price-card .badge {
    position: absolute;
    top: -10px;
    right: 10px;
    background: var(--primary);
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
}
.price {
    font-size: 32px;
    margin: 15px 0;
}

/* CONTACT */
.contact {
    padding: 90px 50px;
    text-align: center;
}
.contact form {
    max-width: 550px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.contact input, .contact textarea {
    padding: 12px;
    border: none;
    border-radius: 5px;
}

/* FOOTER */
footer {
    text-align: center;
    padding: 20px;
    background: #000;
}

/* RESPONSIVE */
@media (max-width: 850px) {

    nav {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .program-grid,
    .pricing-grid {
        flex-direction: column;
        align-items: center;
    }
}