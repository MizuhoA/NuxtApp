export const state = () => ({
  settingList: [], 
  settingId: 1,
  SETTING_MAX: 5
});

export const mutations = {
  addSetting(state, settingInfo){
    const date = new Date(); //現在時刻を取得
    const y = date.getFullYear(), //西暦年
    m = date.getMonth() + 1, //月　
    d = date.getDate(), //日
    H = date.getHours(), //時
    M = date.getMinutes(), //分
    S = date.getSeconds(); //秒
    const startDate = `${y}/${m}/${d} ${H}:${M}:${S}`
    const setting = {'id':state.settingId, 'startDate':startDate, 'exchangeName':settingInfo[0], 'currencyName':settingInfo[1], 'startingPrice':settingInfo[2], 'targetingPrice':settingInfo[3]};
    state.settingList.push(setting);
    state.settingId += 1;
  }, 
}

export const actions = {
}

export const getters = {
  getSettingList(state) {
    const count = state.settingList.length;
    if (count == 0){
      const settingDummy = {'id':'Dummy', 'startDate':'', 'exchangeName':'', 'currencyName':'', 'startingPrice':'', 'targetingPrice':''};
      let settingDummyList = [settingDummy]
      return settingDummyList;
    } else {
      return state.settingList;
    }
  }
};