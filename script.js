document.getElementById( 'generate-btn' ).addEventListener( 'click', function () {
    const prompt = document.getElementById( 'prompt-input' ).value;
    if ( prompt ) {
        // 模拟生成图片
        const generatingImage = document.createElement( 'div' );
        generatingImage.textContent = '生成中...';
        document.getElementById( 'generating-image' ).appendChild( generatingImage );

        // 模拟生成完成
        setTimeout( () => {
            generatingImage.textContent = '图片';
            document.getElementById( 'image-list' ).appendChild( generatingImage );
        }, 2000 );
    }
} ); 