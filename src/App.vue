<script setup>
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Contact from "./views/ContactView.vue";
import Service from "@/views/ServiceView.vue";
import Product from "@/components/productIntro.vue";
</script>
<template>
  <div class="app" v-if="payment == true">
    <Home />
    <Product />
    <About />
    <Service />
    <Contact />
  </div>
  <div class="paymentFailure" v-else>
    <div>
      <svg
        class="icon-p"
        viewBox="0 0 44.678856 34.961563"
        version="1.1"
        id="svg19051"
        xml:space="preserve"
        inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)"
        sodipodi:docname="logo.svg"
        inkscape:export-filename="penguin-logo-bg-s.png"
        inkscape:export-xdpi="96"
        inkscape:export-ydpi="96"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <sodipodi:namedview
          id="namedview19053"
          pagecolor="#ffffff"
          bordercolor="#000000"
          borderopacity="0.25"
          inkscape:showpageshadow="2"
          inkscape:pageopacity="0.0"
          inkscape:pagecheckerboard="0"
          inkscape:deskcolor="#d1d1d1"
          inkscape:document-units="mm"
          showgrid="false"
          showguides="true"
          inkscape:zoom="1.5465208"
          inkscape:cx="215.64534"
          inkscape:cy="190.10414"
          inkscape:window-width="1920"
          inkscape:window-height="1057"
          inkscape:window-x="-8"
          inkscape:window-y="-8"
          inkscape:window-maximized="1"
          inkscape:current-layer="g63818"
        />
        <defs id="defs19048" />
        <g
          inkscape:label="Layer 1"
          inkscape:groupmode="layer"
          id="layer1"
          transform="translate(-56.879682,-87.519218)"
        >
          <g
            id="g21830-8-1-1"
            transform="matrix(0.42595356,0,0,0.42595356,-241.56643,-84.8184)"
            style="stroke-width: 0.99915; stroke-dasharray: none"
          >
            <g
              id="g63803"
              transform="matrix(0.29037997,0,0,0.29037997,-91.267684,359.6241)"
            >
              <g id="g63818" transform="translate(139.86466,-95.956962)">
                <g
                  id="g64881"
                  transform="matrix(0.71685928,0,0,0.71685928,783.7158,89.974201)"
                  inkscape:export-filename=".\Logo.svg"
                  inkscape:export-xdpi="96"
                  inkscape:export-ydpi="96"
                >
                  <g
                    id="g63811"
                    transform="matrix(0.78165201,0,0,0.78165201,309.89296,-159.89894)"
                    style="fill: #64b4d9; fill-opacity: 1"
                  >
                    <path
                      d="m 3094.0167,976.62056 c 2.7493,-10.5998 8.9707,-38.1501 13.8257,-61.223 l 8.8274,-41.95035 15.9301,2.58504 c 13.2369,2.14813 21.5749,-1.72895 49.3304,-22.93676 40.5033,-30.94976 60.6967,-37.94075 120.769,-41.81006 l 46.2547,-2.97944 -19.0649,-14.58466 c -14.2754,-10.92051 -28.477,-15.89128 -56.5331,-19.78539 -67.6889,-9.39483 -88.8034,-14.53767 -107.2983,-26.13363 -17.7163,-11.1081 -18.1276,-12.07986 -13.8422,-32.78347 3.3259,-16.06593 7.3419,-22.0699 16.2567,-24.30741 6.511,-1.63457 30.1249,-19.39184 52.4761,-39.46115 46.5812,-41.82796 71.3059,-56.22825 96.5389,-56.22825 16.0272,0 23.3322,5.91034 74.6359,60.38762 l 56.8721,60.38777 -59.5721,59.73954 c -32.7651,32.85663 -57.4296,61.06414 -54.8087,62.68315 2.6209,1.61873 33.4783,-25.84181 68.5757,-61.02423 l 63.8149,-63.96824 -64.0882,-64.24227 c -60.9263,-61.07439 -65.105,-64.2365 -84.7219,-64.12924 -30.1767,0.16667 -57.096,14.53406 -98.5885,52.62503 -37.4777,34.4051 -58.2398,48.92058 -58.2398,40.71814 0,-2.50444 9.0458,-44.79306 20.1033,-93.97448 11.056,-49.18129 19.1126,-90.4229 17.9019,-91.64766 -5.8976,-5.96881 -12.2529,14.53995 -30.1536,97.30548 -10.6994,49.46647 -20.2987,91.43286 -21.333,93.25859 -1.0387,1.82574 -10.5669,1.38874 -21.1815,-0.97156 -14.967,-3.32691 -27.9551,-13.62426 -57.8463,-45.85983 -40.6398,-43.82847 -54.9646,-51.56725 -95.4526,-51.56725 -20.0774,0 -23.8625,2.88376 -86.0267,65.52699 l -65.0257,65.52716 63.9489,64.01537 c 35.1712,35.20858 65.6584,62.30469 67.7502,60.2135 2.0909,-2.09078 -23.2597,-30.93341 -56.3334,-64.09426 l -60.1352,-60.29224 60.4657,-60.30886 c 55.7585,-55.61183 61.9745,-60.30889 79.8272,-60.30889 29.3966,0 51.4771,11.72216 73.5496,39.04515 33.3061,41.23071 48.1158,53.31757 69.5187,56.74001 24.5319,3.923 25.9012,5.89253 19.7056,28.33435 -10.9057,39.49409 -52.3982,62.3224 -104.4439,57.46212 -29.8489,-2.78748 -36.9216,-1.55865 -62.1862,10.80226 -15.6786,7.67093 -28.5071,15.76622 -28.5071,17.98956 0,2.22306 12.5605,5.3386 27.9115,6.92313 31.7482,3.27657 131.4095,51.11471 131.4095,63.077 0,5.92332 -5.6447,32.39122 -23.2353,108.93402 -4.568,19.88024 7.1507,12.6049 12.4185,-7.7089 z m -19.6812,-243.01614 c 5.5628,-2.97739 9.941,-10.71916 9.941,-17.57963 0,-9.27508 -3.5364,-13.03595 -14.5256,-15.44947 -27.3057,-5.99729 -52.7438,11.21314 -45.2884,30.6401 3.4598,9.01814 34.6902,10.51427 49.873,2.38873 z m 173.5648,0.80623 c 3.7809,-2.39635 6.0944,-9.72165 5.1406,-16.27846 -3.4545,-23.73863 -56.5481,-23.73863 -60.0026,0 -2.1357,14.67567 6.529,20.63536 30.002,20.63536 9.8919,0 21.0804,-1.96068 24.86,-4.3569 z"
                      style="
                        fill: #64b4d9;
                        fill-opacity: 1;
                        stroke: none;
                        stroke-width: 16.1599;
                        stroke-dasharray: none;
                        stroke-opacity: 1;
                      "
                      id="path37828-7"
                      inkscape:export-filename=".\path37828-7.svg"
                      inkscape:export-xdpi="96"
                      inkscape:export-ydpi="96"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="p-text">
      <h1>
        This site has been taken down due to payment failures and breach of
        contract
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payment: true,
    };
  },
};
</script>
<style>
@import "@/style/base.css";
</style>
