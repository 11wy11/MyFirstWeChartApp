// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:"",
    markers:[{
      id:0,
      longitude: 114.365796,
      latitude:30.534921,
      title:'武汉大学信息学部',
      iconPath:"./images/marker.png",
      width:'24rpx',
      height:'24rpx',
      callout:{
        content: "地址：湖北省武汉市洪山区珞喻路129号\n电话：(027)68779303\n坐标：114.365796,30.534921"
      }

    },{

    }],
    showCon:false,
    longitude: 114.366832,
    latitude: 30.533303,
    hasLocation:false,
    locationInfo:"",
    address:"",
    hasChoose:false
  },
  markertap(e){
     console.log(e.markerId);
  },
  changeModalCancel(){
    this.setData({
      showCon:false
    });
  },
  bindGetCurrentLocation(){
    var that=this;
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        that.setData({
          location: "(" + res.longitude + "," + res.latitude + ")",
          longitude: res.longitude,
          latitude: res.latitude    
        })

      },
    })
  },
  bindChooseLocation(){
    var that=this;
    wx.chooseLocation({
      success: function (res) {
        //允许打开定位
        that.setData({
          locationInfo:res.name,
          location: "(" + res.longitude + "," + res.latitude + ")",
          longitude: res.longitude,
          latitude: res.latitude ,
          address:res.address,
          hasChoose:true  
        })
      },
      fail: () => {
        //不允许打开定位
        wx.getSetting({
          success: (res) => {
            if (!res.authSetting['scope.userLocation']) {
              //打开提示框，提示前往设置页面
              that.setData({
                showCon: true
              })
            }
          }
        })
      }
    })
  },
  onReady(e){
    this.mapCtx = wx.createMapContext('myMap')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this
     wx.getLocation({ 
       type: 'wgs84',     
       success:res=> {
         that.setData({
           location: "(" + res.longitude + "," + res.latitude + ")",
           longitude: res.longitude,
           latitude: res.latitude,
           hasLocation: true
         })
        
       },
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})