export default function resizeTable() {
    let thCol,
        pointX,
        currentWidth,
        pointY,
        currentHeight,
        TagEl,
        timer,
        tagTab,
        tagTabHeight,
        changeValue
    const ths = document.querySelectorAll('.el-table__header th')
    const tBodyTr = document.querySelectorAll('.el-table__body tbody')
    const tbodys = document.querySelectorAll('.el-table__body-wrapper')
    //---------------------- 行高调整JS------------------------
    function showRowTip(e) {
        const currentTagHeight = e.target.offsetHeight
        const cursorPositionY = e.offsetY
        const classname = e.target.parentNode.className
        if (
            (classname === 'el-table__row' ||
                classname === 'el-table__row el-table__row--striped') &&
            currentTagHeight - cursorPositionY < 8
        ) {
            document.body.style.cursor = 'row-resize'
        } else {
            document.body.style.cursor = 'auto'
        }
    } function moveRow(event) {
        const newPointY = getMousePos(event).y
        const moveY = newPointY - pointY
        const Height = currentHeight + moveY
        // 防卡，异步挂起
        timer = setTimeout(() => {
            TagEl.style.height = Height + 'px'
            if (changeValue !== TagEl.offsetHeight) {
                changeValue = TagEl.offsetHeight
            } else {
                TagEl.style.height = changeValue + 'px'
            }
        }, 0)
    } function downRowMouse(event) {
        tagTab = event.path.filter((item) => {
            const list = item.classList ? Array.from(item.classList) : []
            if (list.includes('el-table')) {
                return item
            }
        })[0]
        if (tagTab) tagTabHeight = tagTab.offsetHeight
        if (document.body.style.cursor !== 'row-resize') return
        document.body.style['user-select'] = 'none'
        const e = event || window.event
        TagEl = e.target.parentNode
        if (
            TagEl.className === 'el-table__row' ||
            TagEl.classname === 'el-table__row el-table__row--striped'
        ) {
            pointY = getMousePos(e).y
            currentHeight = e.target.offsetHeight
            changeValue = TagEl.offsetHeight
        } window.addEventListener('mousemove', moveRow, false)
    } tBodyTr.forEach((item) => {
        item.addEventListener('mousemove', showRowTip, false)
        // 补丁，解决从表格body下方离开后鼠标样式没有改变问题
        item.addEventListener(
            'mouseleave',
            function () {
                document.body.style['user-select'] = 'auto'
                document.body.style.cursor = 'auto'
            },
            false
        )
    })
    window.addEventListener('mousedown', downRowMouse, false)
    // -------------------------列宽调整JS----------------------
    tbodys.forEach((item) => {
        item.style.overflow = 'auto'
    })
    // 根据鼠标位置去显示是否可以移动表格
    function showTip(e) {
        const currentTagWidth = e.target.offsetWidth
        const cursorPositionX = e.offsetX
        if (currentTagWidth - cursorPositionX < 8) {
            document.body.style = 'user-select: auto; cursor: col-resize'
            ths.forEach((item) => (item.style.cursor = 'col-resize'))
        } else {
            document.body.style.cursor = 'auto'
            ths.forEach((item) => (item.style.cursor = ''))
        }
    }// 计算鼠标位置函数
    function getMousePos(event) {
        const e = event || window.event
        const scrollX =
            document.documentElement.scrollLeft || document.body.scrollLeft
        const scrollY =
            document.documentElement.scrollTop || document.body.scrollTop
        const x = e.pageX || e.clientX + scrollX
        const y = e.pageY || e.clientY + scrollY
        return { x, y }
    } function downMouse(e) {
        if (document.body.style.cursor === 'col-resize') {
            let targetThClassName
            const classNameList = e.target.classList
            const flag = [...classNameList].some((item) => item === 'cell')
            if (flag) {
                targetThClassName = e.target.parentNode.classList[0]
            } else {
                targetThClassName = classNameList[0]
            } pointX = getMousePos(e).x
            currentWidth = e.target.offsetWidth
            thCol = document.getElementsByName(targetThClassName)
            window.addEventListener('mousemove', tableHandle, false)
        }
    } function tableHandle(event) {
        const newPointX = getMousePos(event).x
        const moveX = newPointX - pointX
        timer = setTimeout(() => {
            thCol.forEach((el) => {
                const width = currentWidth + moveX
                if (width >= 50) {
                    el.setAttribute('width', width)
                } else {
                    el.setAttribute('width', 50)
                }
            })
        }, 0)
    } ths.forEach((item) => {
        // 鼠标移入右边界的时候要改变鼠标的样式
        item.addEventListener('mousemove', showTip, false)
        // 当鼠标的样式改变的时候如果按下鼠标，此时需要出现垂直辅助线
    })
    window.addEventListener('mousedown', downMouse, false)
    window.addEventListener(
        'mouseup',
        function (e) {
            clearTimeout(timer)
            document.body.style['user-select'] = 'auto'
            window.removeEventListener('mousemove', moveRow, false)
            window.removeEventListener('mousemove', tableHandle, false)
        },
        false
    )
}