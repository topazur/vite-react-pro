import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { SvgIcon } from '@/components'

import cr from '@/assets/svg/cr.svg'
console.log('cr: ', cr)
import './index.less'

export default function () {
  console.log(gsap)
  useEffect(() => {
    gsap.to('.one', {
      rotation: 27,
      x: 100,
      duration: 1, // second
    })
    const tween = gsap.to('.two', {
      duration: 4,
      x: 250,
      rotation: 360,
      ease: 'none',
      paused: true,
    })
    tween.play()

    gsap.to('.pause', { duration: 1, morphSVG: '.play', delay: 1 })

    gsap.to('#cock', { duration: 2, morphSVG: '#rabbit', delay: 1 })

    return () => {}
  }, [])
  return (
    <div>
      <div className="one rect">~</div>
      <div className="two rect">~</div>
      <div className="bg000">
        <SvgIcon name="control-play-pause" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="icon-control-play-pause">
          <g>
            <path
              className="play hidden"
              fill="#FFF"
              d="M8.516 4C6.047 4 6 6.016 6 6.016l-.008 15.968s.024 2.008 2.508 2.008 2.496-1.996 2.496-1.996L11.016 6s-.031-2-2.5-2zm10.812 0c-2.469 0-2.516 2.016-2.516 2.016l-.008 15.968s.024 2.008 2.508 2.008 2.496-1.996 2.496-1.996L21.828 6s-.031-2-2.5-2z"
            ></path>
          </g>
          <g>
            <path
              className="pause"
              fill="#FFF"
              d="M6.969 3.125s-1.297-.375-2.391.406C3.89 4.093 4 6.008 4 6.008v16.008s-.125 2.226 1 2.976 4-.961 4-.961l12.969-8.156S23 15.062 23 14s-1.031-1.938-1.031-1.938l-15-8.937z"
            ></path>
          </g>
        </svg>
      </div>
      <div>
        <svg width="280" height="270" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#000"
            id="cock"
            d="m152.186499,224.542767c-6.884021,-2.839361 -14.377249,1.310964 -21.731829,-2.824613c5.947935,-0.356416 14.885519,-0.026851 13.307171,-8.523394c2.602501,-9.922057 -2.679016,-20.331368 1.717956,-28.966578c-6.886221,-6.328648 -14.114109,-13.82144 -17.785534,-22.660958c-0.736842,3.566137 -1.415942,6.402996 -2.463159,0.25481c-0.600307,-3.008734 -0.236028,7.437339 -2.531227,0.107781c-2.420829,-6.517464 -8.938271,-23.511488 -10.960479,-7.749361c-0.839876,8.13371 -3.475503,2.362572 -4.680157,-2.799054c-1.223967,-9.939254 -5.644962,-19.147021 -6.802881,-29.066869c4.525621,-6.283915 -0.645156,-7.139517 -3.050464,-0.870365c-2.648668,9.945445 -4.917691,19.78863 -2.154601,30.034594c-3.672033,2.893432 -10.75969,-13.464896 -7.499772,-19.739728c2.828124,-7.099908 2.199325,-14.346853 2.669953,-19.149688c2.585841,-5.417961 -2.515971,-11.305596 0.195953,-17.083429c-6.929892,7.277312 -13.127052,12.310894 -11.180369,23.727772c-0.860179,2.848016 2.888245,19.224563 0.500985,13.194188c-4.507167,-11.77222 -4.51063,-24.80992 -1.118811,-36.82209c0.004173,-9.168594 -7.715918,15.83317 -7.146022,3.578428c-0.730649,-9.242169 3.223657,-19.405062 6.968695,-26.712419c-4.263924,-4.887371 -18.074257,-1.424207 -11.540873,-11.799582c6.429663,-5.273246 5.740602,-12.524578 -3.010201,-6.148584c-13.512741,9.559705 -24.723732,21.841561 -37.111228,32.698279c11.901611,-14.736627 25.318798,-28.996916 41.925096,-38.883406c16.101296,-9.766515 39.448678,-10.776223 53.342148,3.219864c3.533845,5.995206 11.747792,9.969494 13.706292,15.366591c-1.439723,8.089564 3.982954,12.100823 4.565103,19.210866c3.421989,5.486314 -3.087356,15.349972 6.650037,12.506652c11.076702,-0.014996 26.235712,-2.37895 27.102185,-15.686171c4.420675,-19.165142 6.455761,-40.577044 20.611287,-55.829993c7.867249,-4.429973 2.980648,-3.25099 -2.768331,-3.980659c-5.082413,-5.697557 5.130078,-14.843732 10.157752,-15.886294c-0.867331,-13.465302 8.216865,8.072487 10.813765,-1.813913c3.896642,0.071381 5.796332,9.076748 8.165199,1.726402c7.064375,5.757773 14.530686,14.467467 5.199012,22.485943c10.616245,4.902352 -10.817548,1.727589 -1.673294,9.23836c7.546953,7.026101 2.212171,20.005275 -3.98297,25.661653c-0.240622,4.252929 7.263721,10.431738 8.772588,15.591319c7.795484,14.536196 9.358599,31.829868 6.370806,47.758911c-4.20676,15.013338 -19.86273,21.546541 -30.932475,31.084129c-9.455916,7.467106 -6.12885,20.56391 -10.605941,30.370064c0.445147,5.662463 3.726335,12.110635 8.388389,15.528781c6.756246,3.636767 14.671362,5.984553 20.1342,11.309195c-4.989238,2.509751 -15.161864,-7.676417 -15.260258,0.293134c-7.411721,-9.273979 -18.538193,-3.051054 -26.684743,-10.183141c6.779481,1.244474 15.591942,0.603067 8.167796,-7.22107c-2.931463,-6.616658 -11.760857,-8.90002 -11.995091,-16.896874c-8.31954,5.031049 -13.980625,11.880723 -20.021845,18.710306c-10.028971,-0.603458 -10.461389,18.869754 0.367875,18.580842c4.447335,1.095581 21.138557,7.064725 7.994783,5.52285c-3.917725,-0.674261 -8.167913,-3.035991 -8.048102,1.395365c-1.796577,-0.311271 -3.400547,-1.172049 -5.054381,-1.858848l0.000008,0z"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="0"
            fill="#000000"
          ></path>
          <path
            id="rabbit"
            className="hidden"
            d="m135.150604,223.287924c-7.350276,-3.314624 2.24127,-9.941683 5.872563,-12.873183c2.445985,-2.257636 -14.018116,0.316697 -7.067116,-7.520464c7.626261,-6.402532 4.745461,-17.2342 -2.877498,-22.269164c-10.490784,-7.083503 -23.951131,-13.14599 -27.826812,-26.372818c-3.91889,-8.238404 5.374823,-16.915123 -0.602842,-24.354617c-4.811482,-9.659397 0.809696,-19.732124 4.303664,-28.680054c1.60679,-12.377645 -8.236113,-22.166008 -13.649102,-32.334929c-6.702512,-9.717651 -10.566147,-21.04095 -11.121343,-32.841172c-1.457619,-5.036835 0.15548,-12.858902 5.976028,-6.068231c12.189096,9.760145 25.570676,19.021346 34.101609,32.380629c1.614818,4.825481 8.080853,18.811106 8.441922,6.146325c0.169108,-17.406858 5.485566,-36.391639 19.108575,-48.056442c9.266133,-8.44327 14.263323,6.340556 14.695675,13.853136c2.411802,14.781604 -1.586049,29.439972 -6.041051,43.403205c-1.635477,6.489163 -5.894673,24.271838 6.252611,17.715065c27.982979,-10.803642 61.886436,0.543088 80.113343,23.751596c8.378749,11.237273 12.048105,25.674553 11.965264,39.536777c-4.314403,8.143992 11.715909,-0.152563 5.907303,9.24315c-3.419464,10.408211 -13.080794,16.055827 -19.848275,23.911885c-6.886465,6.295166 -1.776916,19.754503 -13.165135,21.737722c-16.616795,5.122544 -34.065795,7.366408 -51.364461,8.672489c-9.680282,1.98322 -14.378173,-9.085923 -5.099966,-13.687647c4.448226,-6.857304 17.174474,-7.337852 20.955695,-8.424173c-9.035882,0.884103 -20.179377,-2.803944 -27.79344,2.792125c-4.61117,7.485654 -8.304314,17.338401 -17.973989,19.47503c-4.345532,1.206902 -8.813515,2.174754 -13.263213,0.863754l-0.000007,0.000007z"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="0"
            stroke="#000"
            fill="#000000"
          ></path>
        </svg>
      </div>
    </div>
  )
}