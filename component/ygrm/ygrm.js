// component/ygrm/ygrm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrcs:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    navTop: [],
    problemList: [],
    activeList: [],
    mouth_img: '',
    cxjList: null,
    hotList: null,
    yellow: String,
    fruits: Array,
 
    vegetables: Array,
    seasoning: Array,
    specialties: Array,
    drink: Array,
    gift: Array,
    kitchen: Array,
    appliances: Array
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCate(){
      wx.reLaunch({
        url: '/pages/classify/classify'
      })
    }
  },
  lifetimes: {
    attached: function () {
      wx.request({
        url: "http://123.57.7.195/api/movie",
        success: (result) => {
          this.setData({
            classify: result.data.classify,
            swipper: result.data.swipper,
            navTop: result.data.navtop,
            problemList: result.data.problemList,
            activeList: result.data.activeList
          })
          console.log(result.data)
        }
      }),
        wx.request({
          url: 'http://api.egu365.com/news/recomImg?seat=122&expiry=true',
          success: (result) => {
           
            this.setData({
              mouth_img: result.data.list[0].img
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseAll?id=94&pageSize=4',
          success: (result) => {
         
            this.setData({
              cxjList: result.data.obj
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseAll?id=95&pageSize=3',
          success: (result) => {
          
            this.setData({
              hotList: result.data.obj
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/recomImg?seat=123&expiry=true',
          success: (result) => {
          
            this.setData({
              yellow: result.data.list[0].img
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=96',
          success: (result) => {
            
            this.setData({
              fruits: result.data.list
            })
          }
        }),
     
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=97',
          success: (result) => {
            
            this.setData({
              vegetables: result.data.list
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=98',
          success: (result) => {
            
            this.setData({
              seasoning: result.data.list
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=99',
          success: (result) => {
           
            this.setData({
              specialties: result.data.list
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=100',
          success: (result) => {
            
            this.setData({
              drink: result.data.list
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=100',
          success: (result) => {
          
            this.setData({
              wine: result.data.list
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=100',
          success: (result) => {
            
            this.setData({
              gift: result.data.list
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=100',
          success: (result) => {
            
            this.setData({
              kitchen: result.data.list
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=101',
          success: (result) => {
           
            this.setData({
              kitchen: result.data.list
            })
          }
        }),
        wx.request({
          url: 'http://api.egu365.com/news/adviseGoods?seat=101',
          success: (result) => {
           
            this.setData({
              appliances: result.data.list
            })
          }
        })
    }
  }
})
