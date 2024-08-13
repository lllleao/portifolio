import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { home } from '@store/reducers/intersection'

import useIntersectionObserver from '@interSection/observerSection'
import Slider from '@components/Slider'

import * as S from './styles'

import avatar from '@images/perfil-fundo2.png'
import cv from '@images/CV-atual.pdf'

const Home = () => {
    const [cvDownload, setCvDownload] = useState(false)

    const dispatch = useDispatch()
    const [observerRef, isIntersectingIn] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })

    useEffect(() => {
        dispatch(home(isIntersectingIn))
    }, [isIntersectingIn, dispatch])

    const handleAnimation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()
        setCvDownload(true)
        setTimeout(() => {
            setCvDownload(false)
            const link = document.createElement('a')
            link.href = cv
            link.download = 'cv.pdf'
            link.click()
            document.body.appendChild(link)
            document.body.removeChild(link)
        }, 4000)
    }
    return (
        <S.HeroContainer id="home" ref={observerRef}>
            <S.Hero className="container">
                <S.Profile>
                    <img srcSet={avatar} alt="Leao Dev" />
                    <S.ProfileNav>
                        <ul>
                            <li className="instagram button-borders">
                                <a
                                    href="https://www.instagram.com/leao_dev/"
                                    target="_blank"
                                    className="primary-button"
                                    rel="noreferrer"
                                >
                                    INSTAGRAM
                                </a>
                            </li>
                            <li className="github button-borders">
                                <a
                                    href="https://www.linkedin.com/in/lucas-leao-lima/"
                                    target="_blank"
                                    className="primary-button"
                                    rel="noreferrer"
                                >
                                    LINKEDIN
                                </a>
                            </li>
                            <S.BntDownload
                                className="curriculo"
                                $download={cvDownload}
                                onClick={(e) => handleAnimation(e)}
                            >
                                <a href={cv} target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-file-arrow-down"></i>
                                    Currículo
                                </a>
                            </S.BntDownload>
                        </ul>
                    </S.ProfileNav>
                </S.Profile>
                <S.Message>
                    <h1>Lucas Leão</h1>
                    <p>
                        <span className="tip">Dica rápida:</span> uma boa
                        presença online e profissional faz toda a diferença. É
                        por isso que estou aqui! Olá, eu sou o Leão,
                        desenvolvedor Front-End - em rumo ao Full Stack -
                        experiênte com React, TypeScript, Python e SQL.
                    </p>
                </S.Message>
            </S.Hero>
            <Slider />
        </S.HeroContainer>
    )
}

export default Home
