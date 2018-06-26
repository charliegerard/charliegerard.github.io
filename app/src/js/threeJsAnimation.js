const threeJsAnimation = () => {
  const ww = window.innerWidth;
  let container, camera, scene, renderer;

  let SEPARATION = (window.mobilecheck() || window.innerWidth < 500) ? ww/10 : ww/30;

  let AMOUNTX = 120, AMOUNTY = 80;
  let particles, particle, count = 0;

  let mouseX = 0;

  var windowHalfX = window.innerWidth /2;
  var windowHalfY = window.innerHeight /2;

  const init = () => {
    container = document.getElementById( 'threejs-container' );

    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight,1,10000);

    if(window.mobilecheck() || window.innerWidth < 500){
      camera.position.set(200,500,1500);
    } else {
      camera.position.set(1000,350,2000);
    }

    scene = new THREE.Scene();

    particles = [];

    var PI2 = Math.PI*2;
    var material = new THREE.SpriteCanvasMaterial( {
      color: 0x939393,
      opacity:0.5,
      program: function ( context ) {
          context.beginPath();
          context.arc(0, 0, 0.2, 0, PI2, true );
          context.fill();
      }
    });

    var i = 0;

    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
        particle = particles[ i++ ] = new THREE.Sprite( material );
        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION) / (Math.PI) );
        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 10 );
        scene.add( particle );
      }//for iy
    }//for ix

    renderer = new THREE.CanvasRenderer({ alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xFFFFFF,0);
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
  }

  const onWindowResize = () => {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  const animate = () => {
    requestAnimationFrame( animate );
    render();
  }

  const render = () => {
    camera.position.x += ( mouseX - camera.position.x ) * .005;
    var i = 0;

    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
        particle = particles[ i++ ];
        particle.position.y = ( Math.sin( ( ix + count ) * 0.20 ) * 50 ) +
            ( Math.sin( ( iy + count ) * 0.2 ) * 20 );
        particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 4 +
            ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
      }
    }

    renderer.render( scene, camera );
    count += 0.3;
  }

  init();
  animate();
}

export default threeJsAnimation;
