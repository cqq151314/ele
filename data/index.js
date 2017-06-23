/**
 * Created by qingqing.chen on 2017/6/23.
 */
module.exports = () => {
    const data = { shops: [] }
    // Create 1000 users
    let shop = {};
    const titleList = ['这家牛肉面不错', '这家牛肉面更好', '黄焖鸡', '泡馍', '肉鸡', '大象', '葫芦头', '蚂蚁上树', '木桶饭', '红烧'];
    // const nameList = ['子元素1', '子元素2', '子元素3', '子元素4', '子元素5', '子元素6', '子元素7', '子元素8', '子元素9', '子元素9'];
    for (let i = 1; i < 10; i++) {
        shop = {
            onetit: '美食',
            name: '子导航',
            id: i,
            title: titleList[i],
            url: '../../images/6.jpg',
            Praise: 10,
            sales: '月销1211单',
            Deliveryfee: '配送费¥3',
            time: '34',
            zhun: '准',
            bao: '保',
            piao: '票',
            yuding: 0,
            detail: '阿香米线（西安大润发店）阿香米线（西安大润发店）阿香米线（西安大润发店）'
        };
        data.shops.push(shop);
    }
    return data
}