class TestMe {
    constructor() {
        this.vue_grid = null;
        this.ShowLoaderCount = 0;
    }

    InitVue() {
        var self = this;

        this.vue_grid = new Vue({
            el: "#vue_data_grid",
            data: {
                GridData: [],
                URL :''
            },
            computed: {
                HasData: {
                    get: function () {
                        return this.GridData && this.GridData.length > 0;
                    }
                },
                GridHeaders: {
                    get: function () {
                        var headers = [];
                        if (this.HasData) {
                            var firstRow = this.GridData[0];
                            _.forOwn(firstRow, function (value, key) {
                                headers.push(key);
                            });
                        }
                        return headers;
                    }
                },
                HasHeaders: {
                    get: function () {
                        return this.GridHeaders && this.GridHeaders.length > 0;
                    }
                },

            },
            watch: {
            },
            methods: {
                LoadData: function () {
                    var data = [{ "Id": 1, "Name": "Blackstone", "CreatedOn": {}, "UpdatedOn": {}, "LastModifiedBy": {}, "LastChangeSource": {}, "LastChangeRefId": {}, "Code": "BL", "CashflowGranularity": "PORTFOLIO", "ForecastGranularity": "PORTFOLIO", "CollectionsDelay": 0 }, { "Id": 4, "Name": "AIMCO", "CreatedOn": {}, "UpdatedOn": {}, "LastModifiedBy": {}, "LastChangeSource": {}, "LastChangeRefId": {}, "Code": "AI", "CashflowGranularity": "OWNER", "ForecastGranularity": "OWNER", "CollectionsDelay": 1 }, { "Id": 5, "Name": "Halcyon", "CreatedOn": {}, "UpdatedOn": {}, "LastModifiedBy": {}, "LastChangeSource": {}, "LastChangeRefId": {}, "Code": "HA", "CashflowGranularity": "OWNER", "ForecastGranularity": "OWNER", "CollectionsDelay": 1 }, { "Id": 24, "Name": "PIMCO", "CreatedOn": {}, "UpdatedOn": {}, "LastModifiedBy": {}, "LastChangeSource": {}, "LastChangeRefId": {}, "Code": "PI", "CashflowGranularity": "OWNER", "ForecastGranularity": "OWNER", "CollectionsDelay": 1 }, { "Id": 35, "Name": "Gunnison", "CreatedOn": {}, "UpdatedOn": {}, "LastModifiedBy": {}, "LastChangeSource": {}, "LastChangeRefId": {}, "Code": "GU", "CashflowGranularity": "OWNER", "ForecastGranularity": "OWNER", "CollectionsDelay": 1 }];
                    var self = this;
                    this.GridData = data;
      //              $.ajax({
      //                  type: "GET",
      //                  headers: { 'Access-Control-Allow-Origin': 'https://localhost:44368' },
      //                  url: 'https://localhost:44368/pvclients/query',
      //                  success: function (response) {
      //                      console.log('LoadData success');
      //                      response = JSON.parse(response);
      //                      console.log(response)
      //                  },
      //                  done: function (response) {
      //                      console.log('done',response)
						//},
      //                  error: function (jqXHR, exception) {
      //                      var msg = '';
      //                      if (jqXHR.status === 0) {
      //                          msg = 'Not connect.\n Verify Network.';
      //                      } else if (jqXHR.status == 404) {
      //                          msg = 'Requested page not found. [404]';
      //                      } else if (jqXHR.status == 500) {
      //                          msg = 'Internal Server Error [500].';
      //                      } else if (exception === 'parsererror') {
      //                          msg = 'Requested JSON parse failed.';
      //                      } else if (exception === 'timeout') {
      //                          msg = 'Time out error.';
      //                      } else if (exception === 'abort') {
      //                          msg = 'Ajax request aborted.';
      //                      } else {
      //                          msg = 'Uncaught Error.\n' + jqXHR.responseText;
      //                      }
      //                      console.log(msg);
      //                  },
      //              });
                },
                GetColumData: function (data,column) {
                    return data[column];
				}
            },
            created() {
            },
            updated() {
                this.$nextTick(() => { });
            },

        });
    }

    InitVueRow() {
        console.log('InitVueRow');
        //let spPage = this;
        //Vue.component('valuation-row', {
        //  template: '#valuation-model-template',

        //  props: {
        //    'data': Object,
        //    'index': Number,
        //    'editing_allowed': Boolean,
        //    'survival_curve_options': Array,
        //    'is_group_available': Boolean,
        //    'projectclose': Boolean
        //  },
        //  computed: {
        //    DiscountRateOptions: {
        //      get: function () {
        //        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        //      }
        //    },
        //    isEditableItem: {
        //      get: function () {
        //        return this.editing_allowed == true && (this.is_group_available == false || this.data.Id == 0);
        //      }
        //    },
        //    ValuationModelisEditableItem: {
        //      get: function () {
        //        return this.data.Id == null || this.data.Id == 0;
        //      }
        //    },
        //    toolTipValue: {
        //      get: function () {
        //        if (this.isEditableItem == false) {
        //          return "Editing disabled due to use in include/exclude group.";
        //        }
        //        return "";

        //      }
        //    },
        //    ValuationModeltoolTipValue: {
        //      get: function () {
        //        if (this.ValuationModelisEditableItem == false) {
        //          return "Saved Valuation Models can not be edited or deleted.";
        //        }
        //        return "";

        //      }
        //    },
        //    deleteToolTipValue: {
        //      get: function () {
        //        if (this.isEditableItem == false) {
        //          return "Removal disabled due to use in include/exclude group.";
        //        }
        //        return "";

        //      }
        //    }


        //  },
        //  data: function () {
        //    return {
        //      IsUIChanged: true,
        //      Syncing: false
        //    };
        //  },
        //  watch: {
        //    'data.PVSurvivalCurveId': function (nv, ov) {
        //      if (nv != ov) {
        //        this.data.DiscountRateFrom = null;
        //        this.data.DiscountRateTo = null;
        //      }
        //    },

        //  },
        //  methods: {
        //    getFromDiscountRateOptions: function () {
        //      var currentOptions = this.DiscountRateOptions;
        //      var toDiscountRate = this.data.DiscountRateTo;
        //      if (toDiscountRate)
        //        currentOptions = _.filter(this.DiscountRateOptions, function (o) { return o <= toDiscountRate; });
        //      return currentOptions;
        //    },
        //    getToDiscountRateOptions: function () {
        //      var currentOptions = this.DiscountRateOptions;
        //      var fromDiscountRate = this.data.DiscountRateFrom;
        //      if (fromDiscountRate)
        //        currentOptions = _.filter(this.DiscountRateOptions, function (o) { return o >= fromDiscountRate; });
        //      return currentOptions;
        //    },
        //    delete_valuation: function () {
        //      var currentValuationIndex = this.index;
        //      if (this.editing_allowed == true && this.is_group_available == false && this.data.Id > 0 && this.data.IsUtilizedInUserCriteria) {
        //        swal({
        //          title: "Are you sure you want to delete this valuation model?",
        //          text: "Deleting valuation model will also reset all user selection criterias where this model is used!",
        //          icon: "warning",
        //          buttons: [
        //            'No',
        //            'Yes'
        //          ],
        //          dangerMode: true,
        //        }).then(function (isConfirm) {
        //          if (isConfirm) {
        //            spPage.vi.$delete(spPage.vi.project_detail.ValuationModels, currentValuationIndex);
        //          }
        //        });
        //      }
        //      else if (this.editing_allowed == true && (this.data.Id == 0 || !this.data.IsUtilizedInUserCriteria)) {
        //        spPage.vi.$delete(spPage.vi.project_detail.ValuationModels, currentValuationIndex);
        //      }

        //    },
        //    isPropInValid: function (prop) {
        //      var output = !(spPage.IsValuationModelKeyValueValid(this.data, prop));
        //      return output;
        //    },
        //    isValidModelRow: function () {
        //      return !this.isPropInValid('PVSurvivalCurveId') && !this.isPropInValid('DiscountRateFrom') && !this.isPropInValid('DiscountRateTo');
        //    },
        //  },
        //  mounted() {
        //  },
        //  updated() {
        //  }
        //});
    }

}

var testMe = new TestMe();
$(document).ready(function () {
  testMe.InitVueRow();
  testMe.InitVue();
  testMe.vue_grid.LoadData();
});
