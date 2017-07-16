// "use strict";
require('es6-promise').polyfill();
require('isomorphic-fetch');
class BsStore {
    // 根据type类型请求数据
    getData(type){
        return  fetch(`shops/${typeof type !== 'undefined' ? '?type='+ type : ''}`);
    }
    // 根据ID类型请求数据
    getIDData(id){
        return  fetch(`/orders/${'?id='+ id}`);
    }
    // 获取菜单栏数据
    getTypes(type2){
        return  fetch('types');
    }
    // 根据关键字获取数据
    getKwordsData(keywords){
        return  fetch(`shops/${typeof keywords !== 'undefined' ? '?keywords='+ keywords : ''}`);
    }
    /**
     *  获取分页数据
     *  @param _page  页码
     *  @param _limit  每页显示的长度
     */
    getOrder(_page,_limit){
        return  fetch(`orders/${'?_page='+ _page+'&_limit='+_limit}`);
    }
    // 获取退货订单的数据
    refusedData(){
        return  fetch('refused');
    }
    // 请求红包数据
    getHongBao(){
        return  fetch(`/hongbao/${'?_sort=end_date&_order=end_date'}`);
    }
    // 请求账户余额数据
    getBalance(type,datetime){
        if(type === undefined && datetime === undefined){
            return  fetch('balance');
        } else if(type != undefined && datetime === undefined ){
            return  fetch(`balance/${'?type='+ type}`);
        }else{
            return  fetch(`balance/${'?type='+ type+'&datetime='+datetime}`);
        }
    }
}
const bsStore = new BsStore();
export default bsStore;
