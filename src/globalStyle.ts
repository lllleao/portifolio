import { createGlobalStyle } from 'styled-components'

export const colors = {
    white: '#fff',
    purple: '#2b0b39',
    purpleLight: '#9047e5'
}

const Global = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        color: ${colors.white};
        list-style: none;
        font-family: 'Montserrat';
    }

    html {
        scroll-behavior: smooth;

    }

    body {
        overflow-x: hidden;
        background-color: #2b0b39;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='334' height='334' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23550055' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23690675'%3E%3Ccircle cx='769' cy='229' r='7'/%3E%3Ccircle cx='539' cy='269' r='7'/%3E%3Ccircle cx='603' cy='493' r='7'/%3E%3Ccircle cx='731' cy='737' r='7'/%3E%3Ccircle cx='520' cy='660' r='7'/%3E%3Ccircle cx='309' cy='538' r='7'/%3E%3Ccircle cx='295' cy='764' r='7'/%3E%3Ccircle cx='40' cy='599' r='7'/%3E%3Ccircle cx='102' cy='382' r='7'/%3E%3Ccircle cx='127' cy='80' r='7'/%3E%3Ccircle cx='370' cy='105' r='7'/%3E%3Ccircle cx='578' cy='42' r='7'/%3E%3Ccircle cx='237' cy='261' r='7'/%3E%3Ccircle cx='390' cy='382' r='7'/%3E%3C/g%3E%3C/svg%3E");
    }

    .container {
        max-width: 1312px;
        width: 90%;
        margin: 0 auto;
    }

    @keyframes sliderFooter {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }

    @keyframes loader {
        0% {
            width: 0;
        } 100% {
            width: 100%;
        }
    }

    @keyframes loaderDeley {
        to {
            opacity: 0;
        }
    }

    @keyframes buttonHeightClose {
        30% {
            color: transparent;
        }
        100% {
            height: 0;
            color: transparent;
        }
    }

    @keyframes buttonHeightOpen {
        30% {
            height: 100%;
        }
        100% {
            height: 100%;

            color: #fff;
        }
    }

    @keyframes shadowImg {
        to {
            filter: drop-shadow(0 0 10px #9047e5);
        }
    }

    @keyframes fly-1 {
        from {
        transform: translateY(0.1em);
        }

        to {
            transform: translateY(-0.1em);
        }
    }

    @keyframes coming {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            transform: translateY(-100px);
            opacity: 0;
        } to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes comingLeft {
        from {
            transform: translateX(-300px);
            opacity: 0;
        } to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes comingRight {
        from {
            transform: translateX(300px);
            opacity: 0;
        } to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`

export default Global
