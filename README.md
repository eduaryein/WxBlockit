## Usage documentation 🚀

**JavaScript**

Include the JavaScript file containing the functions in your project.
Use the wxblock, wxunblock, wxload, wxerror, wxsuccess, wxadblock, and wxadunblock functions as needed in your load, error, success, and element locking/unlocking events.

## Example: ⚒️

```bash
<form method="post" id="frm" onsubmit="return submitFrm(this.id);"></form>
```

Call the wxblock function to show a loader on an element with id "myElement"

```bash
submitFrm(element){
    wxblock([element])
}
```
**jQuery AJAX**

Include jQuery and the JavaScript file that contains the functions in your project.
Use the functions provided within your jQuery AJAX events to display loading, error, success, and element locking/unlocking messages.

## Example: ⚒️

```bash
$.ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    beforeSend: function() {
        // Show loader before request
        wxload([document.body]);
    },
    success: function(response) {
        // In case of success
        wxsuccess([document.body], 'Data uploaded successfully');
    },
    error: function(error) {
        // In case of error
        wxerror([document.body], 'Error loading data');
    },
    complete: function() {
        // Hide loader after request
        wxunblock([document.body]);
    }
});
```

**Axios**

Include Axios and the JavaScript file that contains the functions in your project.
Use the functions provided within your Axios requests to display loading, error, success, and item lock/unlock messages.

## Example: ⚒️

```bash
axios.get('https://api.example.com/data')
    .then(response => {
        // In case of success
        wxsuccess([document.body], 'Data uploaded successfully');
    })
    .catch(error => {
        // In case of error
        wxerror([document.body], 'Error loading data');
    })
    .finally(() => {
        // Unlock area after request
        wxadunblock([document.body]);
    });
```
## About

This code was provided by <a href="https://winxer.org/">winxer.org</a>.

I hope these additional Examples are useful to you when using the functions in your jQuery AJAX and Axios projects. If you need more help or any additional modifications, don't hesitate to ask!

## License &copy;

- Copyright © [Winxer](https://winxer.org/)
- Licensed under [MIT](LICENSE)
- All our free items are Open Source and licensed under MIT. You can use our free items for personal as well as commercial purposes.

  ## Social Media

- [Twitter](https://x.com/targetcode)
- [Facebook](https://www.facebook.com/targetcode.com.ve/)
- [Instagram](https://www.instagram.com/eduaryeins/)
- [YouTube](https://www.youtube.com/@targetcode.)
