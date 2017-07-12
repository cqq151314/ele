/**
 * Created by qingqing.chen on 2017/6/23.
 */
module.exports = () => {
    const data = { shops: [], types:[],orders:[] };

    let shop = {};
    const titleList = ['霸王牛肉面·专业面食外卖', '鸡将军黄焖鸡（高新店)', '赵家腊汁肉（高新旗舰店', '这家店不错牛肉面', '神龙冒菜', '川魂冒牌冒菜', '小竹签烤肉（枫韵蓝湾店）', '大自在火锅（丰庆店）', '老碗（太白店）', '乍见之欢炒菜馆','麻辣私厨','一品小厨','川湘源川菜馆',
        '霸王牛肉面·专业面食外卖', '鸡将军黄焖鸡（高新店）', '赵家腊汁肉（高新旗舰店）', '这家店不错牛肉面', '神龙冒菜', '川魂冒牌冒菜', '小竹签烤肉（枫韵蓝湾店）','霸王牛肉面·专业面食外卖', '鸡将军黄焖鸡（高新店）', '赵家腊汁肉（高新旗舰店）', '这家店不错牛肉面', '神龙冒菜', '川魂冒牌冒菜', '小竹签烤肉（枫韵蓝湾店' ,
        '霸王牛肉面·专业面食外卖', '鸡将军黄焖鸡（高新店）', '赵家腊汁肉（高新旗舰店）', '这家店不错牛肉面', '神龙冒菜', '川魂冒牌冒菜', '小竹签烤肉（枫韵蓝湾店）', '霸王牛肉面·专业面食外卖', '鸡将军黄焖鸡（高新店）', '赵家腊汁肉（高新旗舰店）', '这家店不错牛肉面', '神龙冒菜', '川魂冒牌冒菜', '小竹签烤肉（枫韵蓝湾店）', '川湘源川菜馆', '大自在火锅（丰庆店）', '老碗（太白店）', '乍见之欢炒菜馆'       ];
    const typeList = [10, 11, 12, 21, 22, 23,31,32,33,41,42,43]
    let j = 0;
    for (let i = 1; i < 45; i++) {
        if(j >=typeList.length){
            j=0;
            j=0;
        }
        shop = {
            id: i,
            type: typeList[j],
            title: titleList[i],
            url: '../../images/6.jpg',
            Praise: 10,
            sales: '月销1211单',
            Deliveryfee: '配送费¥3',
            time: '34',
            pageSize:3,
            currentPage:i,
            zhun: '准',
            bao: '保',
            piao: '票',
            yuding: 0,
            title:titleList[i],
            keywords:titleList[i],
            detail: '阿香米线（西安大润发店）阿香米线（西安大润发店）阿香米线（西安大润发店）'
        };
        j++;
        data.shops.push(shop);
    }

    // types
    let types = [
        {
            id:1,
            name:"美食",
            sub_categories: [
                {
                    id: 10,
                    name: "全部",
                },
                {
                    id: 11,
                    name: "简餐便当",
                },
                {
                    id: 12,
                    name: "小吃炸串",
                }
            ]
        },
        {
            id:2,
            name:"快餐便当",
            sub_categories: [
                {
                    id: 21,
                    name: "全部",
                },
                {
                    id: 22,
                    name: "简餐",
                },
                {
                    id: 23,
                    name: "米粉面馆",
                }
            ]
        },
        {
            id:3,
            name:"特色菜系",
            sub_categories: [
                {
                    id: 31,
                    name: "全部",
                },
                {
                    id: 32,
                    name: "穿湘菜",
                },
                {
                    id: 33,
                    name: "西北菜",
                }
            ]
        },{
            id:4,
            name:"异国料理",
            sub_categories: [
                {
                    id: 41,
                    name: "全部",
                },
                {
                    id: 42,
                    name: "日韩料理",
                },
                {
                    id: 43,
                    name: "西餐",
                }
            ]
        }
    ];
    // order 订单
    const time=['07-07','01-27','11-5','02-08','12-04','03-17','07-07','01-27','11-5','02-08','12-04','03-17','07-07','01-27','11-5','02-08','12-04','03-17',
                '07-07','01-27','11-5','02-08','12-04','03-17','07-07','01-27','11-5','02-08','12-04','03-17','07-07','01-27','11-5','02-08','12-04','03-17',
                '07-07','01-27','11-5','02-08','12-04','03-17','07-07','01-27','11-5','02-08','12-04','03-17','07-07','01-27','11-5','02-08','12-04','03-17'];
    for (let i = 1; i < 50; i++) {
        order = {
            id: i,
            title: titleList[i],
            url: '../../images/6.jpg',
            orderDay:time[i],
            orderTime:"11:10",
            orderNumber:Math.ceil(Math.random()*100000000000000000000),
            Merchant:Math.ceil(Math.random()*100000000),
            goods:[{name:"阿香番茄米线", num:1,smalltotal:31.00},{name:"肉价馍", num:2,smalltotal:17.00}],
            total:54.00,
            totalnum:3,
            lunchBox: 3.00,
            Deliveryfee: 3.00,
            Buyers: "陈清清女士",
            Buyerstell:'18729316055',
            Buyersadress:'	蓝溪国际大厦20楼',
            Remarks:'无备注',
        };

        data.orders.push(order);
    }
    data.types = types;
    return data
}