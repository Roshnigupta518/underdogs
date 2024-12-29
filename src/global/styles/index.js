import {StyleSheet, Platform, Dimensions} from 'react-native';
import {size, family} from '../fonts';
import {colors} from '../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  row: {flexDirection: 'row'},
  pd20: {padding: 20},
  pd10: {padding: 10},
  pdT0: {paddingTop: 0},
  pd_H20: {paddingHorizontal: 15},
  mt_v: {marginVertical: 10},
  mt_B: {marginBottom: 15},
  ml_15: {marginLeft: 15},
  mt_t10: {
    marginTop: 10,
  },
  mh_10: {marginHorizontal: 10},
  mr_10: {marginRight: 15},
  mt_per10: {marginTop: '10%'},
  mt_15:{marginTop:15},

  wdh60: {width: '60%'},
  wdh40: {width: '40%'},
  wdh20: {width: '20%'},
  wdh30: {width: '30%'},
  wdh10: {width: '10%'},
  wdh15: {width: '15%'},
  wdh18: {width: '18%'},
  wdh55: {width: '55%'},
  wdh70: {width: '70%'},
  wdh50: {width: '50%'},
  wdh48: {width: '48%'},
  wdh75: {width: '75%'},
  wdh80: {width: '80%'},
  wdh90: {width: '90%'},
  wdh65: {width: '65%'},
  wdh85: {width: '85%'},

  center: {justifyContent: 'center', alignItems: 'center', flex: 1},
  align_C: {alignItems: 'center'},
  align_E: {alignItems: 'flex-end'},
  justify_C: {justifyContent: 'center'},
  justify: {justifyContent: 'flex-end'},
  justify_S: {justifyContent: 'space-between'},
  justify_A: {justifyContent: 'space-around'},

  txAlignC: {textAlign: 'center'},
  txAlignJ: {textAlign: 'justify'},
  txAlignR: {textAlign: 'right'},
  txAlignL: {textAlign: 'left'},

  txCap: {textTransform: 'capitalize'},
  txUpr: {textTransform: 'uppercase'},

  txDecor: {textDecorationLine: 'underline'},

  txbold: {fontFamily: family.semibold},

  tx10: {
    fontSize: 10,
    color: colors.black,
    fontFamily: family.regular,
  },
  tx12: {
    fontSize: size.label,
    color: colors.black,
    fontFamily: family.light,
  },

  tx13: {
    fontSize: size.subtitle,
    color: colors.black,
    fontFamily: family.regular,
  },
  tx14: {
    fontSize: size.subtitle,
    color: colors.grey,
    fontFamily: family.regular,
    letterSpacing: 0.8,
    lineHeight: 30,
  },
  tx18: {
    fontSize: size.subheading,
    color: colors.black,
    fontFamily: family.semibold,
    letterSpacing: 0.8,
  },
  tx16: {
    fontSize: size.title,
    color: colors.grey,
    fontFamily: family.regular,
    lineHeight: 28,
    letterSpacing: 0.8,
  },

  tx20: {
    fontSize: size.heading,
    color: colors.black,
    fontFamily: family.semibold,
  },
  tx22: {
    fontSize: 24,
    color: colors.secondary,
    fontFamily: family.semibold,
    lineHeight: 38,
  },
  shadowProp: {
    elevation: 1,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  borderSty: {
    borderBottomWidth: 0.7,
    borderBottomColor: colors.grey,
    marginVertical: 10,
  },
  boxsty: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginBottom: 15,
  },
  linearcard: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 15,
  },
  filtericon: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    padding: 8,
    height: 48,
    justifyContent: 'center',
    width: 50,
    alignItems: 'center',
    marginTop:15
  },
  greyBox: {
    backgroundColor: 'rgba(230, 230, 230, 1)',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
});
