import swal from 'sweetalert2';

// Simple Alert
export function basicAlert() {
    swal.fire("Here's a message!");
}

// Alert with Title
export function withTitle() {
    swal.fire("Here's a message!", "It's pretty, isn't it?");
}

//  HTML Alert
export function htmlAlert() {
    swal.fire({
        title: 'HTML <small>Title</small>!',
        html: 'A custom <span style="color:#F6BB42">html<span> message.'
    });
}

// Question Type Alert
export function typeQuestion() {
    swal.fire("Question", "Are You Sure?", "question");
}

// Success Type Alert
export function typeSuccess() {
    swal.fire("Good job!", "You clicked the button!", "success");
}

// Info Type Alert
export function typeInfo() {
    swal.fire("Info!", "You clicked the button!", "info");
}

// Warning Type Alert
export function typeWarning() {
    swal.fire("Warning!", "You clicked the button!", "warning");
}

// Error Type Alert
export function typeError() {
    swal.fire("Error!", "You clicked the button!", "error");
}

// Custom Icon
export function customIcon() {
    swal.fire({ title: "Sweet!", text: "Here's a custom image.", imageUrl: "./assets/img/portrait/avatars/avatar-08.png" });
}

// Auto close timer
export function autoClose() {
    swal.fire({ title: "Auto close alert!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
}

// Allow Outside Click
export function outsideClick() {
    swal.fire({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        allowOutsideClick: true
    });
}

// Ajax Request
export function ajaxRequest() {
    swal.fire({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, 2000);
            });
        },
        allowOutsideClick: false
    }).then(function (email) {
        if (email) {
            swal.fire({
                title: 'Ajax request finished!',
                icon: 'info'
            });
        }
    })
}

// Button Options
export function customButton() {
    swal.fire({
        title: '<i>HTML</i> <u>example</u>',
        icon: 'info',
        html:
            'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i> Opps!'
    })
}

// Prompt Function
export function promptFunction() {
    swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
    }).queue([
        {
            title: 'Question 1',
            text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
    ]).then((result) => {
        if (result.value) {
            swal.fire({
                title: 'All done!',
                html:
                    'Your answers: <pre><code>' +
                    JSON.stringify(result.value) +
                    '</code></pre>',
                confirmButtonText: 'Lovely!'
            })
        }
    })

}

// Confirm Button Action
export function confirmText() {
    swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })

}

// Confirm & Cancel Button
export function confirmCancelButton() {
    swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        customClass: {
            confirmButton: 'btn btn-success btn-raised mr-5',
            cancelButton: 'btn btn-danger btn-raised'
          },
        buttonsStyling: false
    }).then(function () {
        swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
        )
    })
}

// Chaining modals / Steps
export function steps() {
    swal.mixin({
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        cancelButtonColor: '#FF586B',
        animation: false
    });

    var steps = [
        {
            title: 'Step 1',
            text: 'Chaining modals is easy with Step 1'
        },
        {
            title: 'Step 2',
            text: 'Chaining modals is easy with Step 2'
        },
        {
            title: 'Step 3',
            text: 'Chaining modals is easy with Step 3'
        },
    ];

    swal.queue(steps).then(function () {
        swal.fire({
            title: 'All done!',
            text: 'Great job :)',
            confirmButtonText: 'Lovely!',
            showCancelButton: false
        });
    }).then(function () {
        swal.mixin();
    });
}
