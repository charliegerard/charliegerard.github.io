import isMobile from './isMobile';

const threeJsAnimation = () => {
  const ww = window.innerWidth;
  let container, camera, scene, renderer;

  let SEPARATION = (isMobile() || ww < 500) ? ww/10 : ww/30;

  let AMOUNTX = 120, AMOUNTY = 50;
  let particles, particle, count = 0;

  var spriteMap = new THREE.TextureLoader().load( 'app/src/images/particle.webp' );

  const init = () => {
    container = document.getElementById('threejs-container');
    camera = new THREE.PerspectiveCamera(90, ww / window.innerHeight,1,10000);

    if(isMobile() || ww < 500){
      camera.position.set(200,500,1500);
    } else {
      camera.position.set(900,350,1800);
    }

    scene = new THREE.Scene();

    particles = [];

    var PI2 = Math.PI*2;
    var material = new THREE.SpriteMaterial( {
      color: 0x939393,
      opacity:0.2,
      map: spriteMap,
      fog: true
    });

    var i = 0;

    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
        particle = particles[ i++ ] = new THREE.Sprite( material );
        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION) / (Math.PI) );
        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 10 );
        scene.add( particle );
      }
    }

    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( ww, window.innerHeight );
    renderer.setClearColor( 0xFFFFFF,0);
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
  }

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  const animate = () => {
    requestAnimationFrame( animate );
    render();
  }

  const render = () => {
    var i = 0;

    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
        particle = particles[ i++ ];
        particle.position.y = ( Math.sin( ( ix + count ) * 0.20 ) * 50 ) +
            ( Math.sin( ( iy + count ) * 0.2 ) * 20 );
        particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 2 +
            ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
      }
    }

    renderer.render( scene, camera );
    count += 0.1;
  }

  init();
  animate();
}

export default threeJsAnimation;
