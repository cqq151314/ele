/**
 * Created by qingqing.chen on 2017/6/23.
 */
module.exports = () => {
    const data = { shops: [], types:[],orders:[],refused:[],hongbao:[] };

    let shop = {};
    const titleList = ['霸王牛肉面·专业面食外卖', '鸡将军黄焖鸡（高新店)', '赵家腊汁肉（高新旗舰店）', '这家店不错牛肉面', '神龙冒菜', '川魂冒牌冒菜', '小竹签烤肉（枫韵蓝湾店）', '大自在火锅（丰庆店）', '老碗（太白店）', '乍见之欢炒菜馆','麻辣私厨','一品小厨','川湘源川菜馆',
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
            url: i,
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
    const time=['07-07','01-27','11-05','02-08','12-04','03-17','07-07','01-27','11-05','02-08','12-04','03-17','07-07','01-27','11-05','02-08','12-04','03-17',
                '07-07','01-27','11-05','02-08','12-04','03-17','07-07','01-27','11-05','02-08','12-04','03-17','07-07','01-27','11-05','02-08','12-04','03-17',
                '07-07','01-27','11-05','02-08','12-04','03-17','07-07','01-27','11-05','02-08','12-04','03-17','07-07','01-27','11-05','02-08','12-04','03-17'];
    const orderTime=['11:10','09-27','12-00','12-08','12-04','16-17','16-57','19-27','11-05','04-38','12-04','03-17','07-07','01-27','11-5','02-08','12-04','03-17',
                        '07-07','01-27','11-5','10-08','11-04','13-17','17-37','11-27','11-35','02-28','12-04','03-37','07-07','01-27','11-5','02-08','12-04','03-17',
                        '07-07','01-27','11-5','02-08','12-04','03-17','07-07','01-27','11-5','02-08','12-22','23-17','19-07','5-27','11-24','15-08','12-04','22-17'];
    for (let i = 1; i < 50; i++) {
        order = {
            id: i,
            title: titleList[i],
            url: '../../images/6.jpg',
            orderDay:time[i],
            orderTime:orderTime[i],
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
    // 退单表
    let refused = [];

    // 红包
    let hongbao = [
        {
            amount:6,
            begin_date:"2017-7-12T00:00:00+0800",
            description: ["满6元可用", "限尾号 6055 的手机使用", "2017-07-12 至 2017-07-18"],
            end_date: "2017-7-18T23:59:59+0800",
            hongbao_type: "GENERAL",
            id: 11,
            name: "普通红包",
            sn: "201707120207253677157166252406",
            source: "walle_hongbao",
            status: 0,
            subscriber_line_number: "6055",
            sum_condition: 6,
            used_amount: 0,
            used_at: "2017-07-12T02:07:09+0800",
            variety: null,
        },
        {
            amount:30,
            begin_date:"2017-7-12T00:00:00+0800",
            description: ["满30元可用", "限尾号 6055 的手机使用", "2017-07-12 至 2017-07-18"],
            end_date: "2017-7-18T23:59:59+0800",
            hongbao_type: "GENERAL",
            id:12,
            name: "普通红包",
            sn: "201707120207253677157364366624",
            source: "walle_hongbao",
            status: 0,
            subscriber_line_number: "6055",
            sum_condition: 30,
            used_amount: 0,
            used_at: "2017-07-12T02:07:09+0800",
            variety: null,
        },
        {
            amount:10,
            begin_date:"2017-7-12T00:00:00+0800",
            description: ["满30元可用", "限尾号 6055 的手机使用", "2017-07-12 至 2017-07-18"],
            end_date: "2017-7-17T00:00:00+0800",
            hongbao_type: "GENERAL",
            id:13,
            name: "普通红包",
            sn: "201707120207253677157364366624",
            source: "walle_hongbao",
            status: 0,
            subscriber_line_number: "6055",
            sum_condition: 30,
            used_amount: 0,
            used_at: "2017-07-12T02:07:09+0800",
            variety: null,
        },
        {
            amount:10,
            begin_date:"2017-7-12T00:00:00+0800",
            description: ["满30元可用", "限尾号 6055 的手机使用", "2017-07-12 至 2017-07-18"],
            end_date: "2017-7-07T23:59:59+0800",
            hongbao_type: "GENERAL",
            id:14,
            name: "普通红包",
            sn: "201707120207253677157364366624",
            source: "walle_hongbao",
            status: 0,
            subscriber_line_number: "6055",
            sum_condition: 30,
            used_amount: 0,
            used_at: "2017-07-12T02:07:09+0800",
            variety: null,
        },
        {
            amount:20,
            begin_date:"2017-7-12T00:00:00+0800",
            description: ["满50元可用", "限尾号 6055 的手机使用", "2017-07-12 至 2017-07-18"],
            end_date: "2017-7-07T23:59:59+0800",
            hongbao_type: "GENERAL",
            id:15,
            name: "普通红包",
            sn: "201707120207253677157364366624",
            source: "walle_hongbao",
            status: 0,
            subscriber_line_number: "6055",
            sum_condition: 30,
            used_amount: 0,
            used_at: "2017-07-12T02:07:09+0800",
            variety: null,
        },
        {
            amount:15,
            begin_date:"2017-7-02T00:00:00+0800",
            description: ["满70元可用", "限尾号 6055 的手机使用", "2017-07-02 至 2017-07-07"],
            end_date: "2017-7-07T23:59:59+0800",
            hongbao_type: "GENERAL",
            id:16,
            name: "普通红包",
            sn: "201707120207253677157364366624",
            source: "walle_hongbao",
            status: 0,
            subscriber_line_number: "6055",
            sum_condition: 30,
            used_amount: 0,
            used_at: "2017-07-12T02:07:09+0800",
            variety: null,
        }
    ];

    data.types = types;
    data.refused = refused;
    data.hongbao=hongbao
    return data
}