/* ==================================================
   ROBERTO DEV — SCRIPT.JS
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU MOBILE
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");


    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            const isOpen =
                nav.classList.contains("active");


            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Fechar menu"
                    : "Abrir menu"
            );


            menuBtn.textContent =
                isOpen ? "✕" : "☰";

        });


        /* Fechar ao clicar nos links */

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

                menuBtn.textContent = "☰";

            });

        });


        /* Fechar ao clicar fora */

        document.addEventListener(
            "click",
            (event) => {

                const insideNav =
                    nav.contains(event.target);

                const insideButton =
                    menuBtn.contains(event.target);


                if (
                    nav.classList.contains("active") &&
                    !insideNav &&
                    !insideButton
                ) {

                    nav.classList.remove("active");

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuBtn.setAttribute(
                        "aria-label",
                        "Abrir menu"
                    );

                    menuBtn.textContent = "☰";

                }

            }
        );

    }


    /* =========================
       SCROLL SUAVE
    ========================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const header =
                        document.querySelector(
                            "header"
                        );


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const position =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight;


                    window.scrollTo({

                        top: position,

                        behavior: "smooth"

                    });

                }
            );

        });


    /* =========================
       ANO AUTOMÁTICO
    ========================== */

    const footer =
        document.querySelector("footer");


    if (footer) {

        const paragraph =
            footer.querySelector("p");


        if (paragraph) {

            paragraph.textContent =
                `© ${new Date().getFullYear()} Roberto Dev. Todos os direitos reservados.`;

        }

    }


    /* =========================
       HEADER AO SCROLL
    ========================== */

    const header =
        document.querySelector("header");


    if (header) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 50) {

                    header.style.boxShadow =
                        "0 8px 30px rgba(0, 0, 0, 0.25)";

                } else {

                    header.style.boxShadow =
                        "none";

                }

            },
            { passive: true }
        );

    }


    /* =========================
       ESC FECHA MENU
    ========================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                nav &&
                nav.classList.contains("active")
            ) {

                nav.classList.remove("active");


                if (menuBtn) {

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuBtn.setAttribute(
                        "aria-label",
                        "Abrir menu"
                    );


                    menuBtn.textContent = "☰";

                }

            }

        }
    );


    /* =========================
       MENSAGEM DE TESTE
    ========================== */

    console.log(
        "Roberto Dev — Website carregado com sucesso."
    );

});