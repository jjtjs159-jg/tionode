const main = {
  init: function () {
    const _this = this;
    document.querySelector('#send').onclick = function () {
      _this.join();
    }
  },
  join: function () {
    const data = {
      userid: document.getElementById('userid').value,
      password: document.getElementById('password').value,
      name: document.getElementById('name').value,
    }
    console.log(data);
    axios.post('/join', data).then(res => {
      console.log(res);

      if (res.status = 200 && res.statusText === 'OK') {
        alert('Hi')
        location.href = '/';
      } else {
        alert('fail')
      }
    })
  }
}

main.init();