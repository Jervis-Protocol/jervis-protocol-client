$(document).ready(function () {
    $('#summernote').summernote({
        lang: 'ko-KR',
        height: 400,
        popover: {
            image: [
                ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
                ['float', ['floatLeft', 'floatRight', 'floatNone']],
                ['remove', ['removeMedia']]
            ],
            link: [
                ['link', ['linkDialogShow', 'unlink']]
            ],
            table: [
                ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
            ],
            air: [
                ['color', ['color']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['ul', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture']]
            ]
        },
        callbacks: {
            onImageUpload : function(files) {
                // sendFile(files, this);
                for(let i = files.length - 1; i >= 0; i--) {
                    sendFile(files[i], this);
                }
            }
        }
    });


    function sendFile(file, editor) {
        const data = new FormData();
        data.append("file", file);

        console.log(data);
        $.ajax({
            type: "POST",
            url: "/api/funding/story/fileUpload",
            data: data,
            contentType: false,
            processData: false, // Don't process the files
            success: function (url) {
                console.log(url)
                $(editor).summernote('insertImage', `/${url}`);
            }
        });
    }
});
