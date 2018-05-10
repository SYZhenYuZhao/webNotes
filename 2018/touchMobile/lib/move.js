 /*
    DATE:2018-05-09
    author:SYzhaozhenyu
    content:对于touch事件的简单封装
    //必要参数 target目标节点  type滑动方向  callback回调函数
*/
function Move(target, type, callback) {
    if (!target) {
        throw 'target is required';
        return;
    }
    if (!type) {
        throw 'type is required';
        return;
    }
    if (!callback) {
        throw 'callback is required';
        return;
    }
    this.startx;
    this.endx;
    this.target = target;
    this.type = type;
    this.callback = callback;
    // console.log(tar)
   // console.log(this.target)
    this.addListener()
}

Move.prototype.addListener = function () {
    let me = this;
    me.target.addEventListener('touchstart', function (e) {
        let touch = e.changedTouches;
        //只取第一个触点
        me.startx = touch[0].clientX;
        me.starty = touch[0].clientY;
        // console.log(me.startx, me.starty, 'start')
        // console.log(e, 'start')
    });
    me.target.addEventListener('touchend', function (e) {
        let touch = e.changedTouches;
        me.endx = touch[0].clientX;
        me.endy = touch[0].clientY;
        // console.log(me.endx, me.endy, 'end')
        me.handlerDirection()
    });
}
Move.prototype.handlerDirection = function () {
    let { startx, endx, type, callback } = this;
    if (startx && endx) {
        if (type === 'left') {
            if (startx - endx > 10) {
                callback()
            }
        }
        if (type === 'right') {
            if (startx - endx < -10) {
                callback()
            }
        }
    }
}