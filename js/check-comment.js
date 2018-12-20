$(document).ready(function () {

    (function () {
        var formValidation = {

            isValid: true,

            init: function () {
                this._setUpListeners();
            },

            _setUpListeners: function () {
                $('#comment-add-form').on('submit', formValidation._validateForm).on('submit', formValidation._sendEmail);
            },

            _validateForm: function (event) {
                event.preventDefault();

                var form = $(this),
                    inputs = form.find('input, textarea'),
                    checkboxes = form.find('input:checkbox'),
                    radios = form.find('input:radio'),
                    valid = true;

                $.each(inputs, function (index, val) {
                    var input = $(val),
                        value = input.val().trim(),
                        commentTextarea = $('#commentText'),
                        commentErrorEmpty = $('#commentErrorEmpty');

                    if (value.length === 0) {
                        commentErrorEmpty.fadeIn(1000);
                        valid = false;
                    }
                });

                formValidation.isValid = valid;
            },

            _sendEmail: function () {

                if (formValidation.isValid === true) {
                    $('#comment-add-form').unbind('submit').submit();
                } else {
                    console.log('Validation FAILED!');
                }
            }
        };

        formValidation.init();

    }());
});