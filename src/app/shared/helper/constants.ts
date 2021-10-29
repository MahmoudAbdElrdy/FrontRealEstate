
export class Globals {
  public static isRtl: boolean = false;
  public static formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}

export class Locales {


  public static getLocaleObjects(): Object {
  return ({'ar-AE': {
    pager: {
      Add: 'إضافة',
      Edit: 'تعديل',
      Cancel: 'إلغاء',
      Update: 'تحديث',
      Delete: 'حذف',
      Print: 'طباعة',
      Pdfexport: 'تصدير PDF',
      Excelexport: 'تصدير Excel',
      Wordexport: 'تصدير Word',
      Search: 'بحث',
      Save: 'حفظ',
      Item: 'عنصر',
      Items: 'عناصر',
      ConfirmDelete: 'هل أنت متأكد من حذف هذا السجل؟',
      Matchs: 'م يتم العثور على نتائج',
      FilterButton: 'فلتر',
      ClearButton: 'تفريغ',
      StartsWith: 'يبدأ بـ',
      EndsWith: 'ينتهي بـ',
      Contains: 'يحتوي على',
      Equal: 'يساوي',
      NotEqual: 'لا يساوي',
      LessThan: 'أقل من',
      LessThanOrEqual: 'أقل من أو يساوي',
      GreaterThan: 'أكبر من',
      GreaterThanOrEqual: 'أكبر من أو يساوي',
      ChooseDate: 'اختر تاريخ',
      EnterValue: 'إدخل القيمة',
      EmptyRecord: 'لا توجد سجلات لعرضها',
      Copy: 'نسخ',
      Group: 'جميع حسب هذا العمود',
      Ungroup: 'فك التجميع حسب هذا العمود',
      Export: 'تصدير',
      FirstPage: 'الصفحة الأولى',
      LastPage: 'الصفحة الأخيره',
      PreviousPage: 'الصفحة السابقة',
      NextPage: 'الصفحة التالية',
      SortAscending: 'ترتيب تصاعدي',
      SortDescending: 'ترتيب تنازلي',
      EditRecord: 'تعديل السجل',
      DeleteRecord: 'حذف السجل',
      FilterMenu: 'فلتر',
      SelectAll: 'تحديد الكل',
      Blanks: 'فراغات',
      FilterTrue: 'صحيح',
      FilterFalse: 'خاطئ',
      NoResult: 'لا توجد نتائج',
      ClearFilter: 'تفريغ الفلاتر',
      NumberFilter: 'فلاتر رقمية',
      TextFilter: 'فلاتر نصية',
      DateFilter: 'فلاتر تاريخ',
      MatchCase: 'حالة التطابق',
      Between: 'بين',
      CustomFilter: 'فلتر مخصص',
      CustomFilterPlaceHolder: 'أدخل القيمة',
      CustomFilterDatePlaceHolder: 'اختر تاريخ',
      AND: 'و',
      OR: 'أو',
      ShowRowsWhere: 'Show rows where:',
      currentPageInfo: '{0} من {1} صفحات',
      totalItemsInfo: '({0} عناصر)',
      totalItemInfo: '({0} عنصر)',
      firstPageTooltip: 'اذهب للصفحة الأولى',
      lastPageTooltip: 'اذهب للصفحة الأخيرة',
      nextPageTooltip: 'اذهب للصفحة التالية',
      previousPageTooltip: 'اذهب للصفحة السابقة',
      nextPagerTooltip: 'Go to next pager',
      previousPagerTooltip: 'Go to previous pager',
      pagerDropDown: 'عناصر لكل صفحة',
      pagerAllDropDown: 'عناصر',
      All: 'الكل',
      ExpandAll: 'توسيع الكل',
      CollapseAll: 'طي الكل',
      SaveButton: 'حفظ',
      OKButton: 'تطبيق',
      CancelButton: 'إلغاء',
    }}
  })

  }
 
  public static getTreeGridLocaleObjects(): Object {
    debugger
    let language: string = "ar-AE";
    switch (language) {
      case 'ar-AE':
        return {
          'ar-AE': {
            treegrid: {
              Add: 'إضافة',
              Edit: 'تعديل',
              Cancel: 'إلغاء',
              Update: 'تحديث',
              Delete: 'حذف',
              Print: 'طباعة',
              Pdfexport: 'تصدير PDF',
              Excelexport: 'تصدير Excel',
              Wordexport: 'تصدير Word',
              Search: 'بحث',
              Save: 'حفظ',
              Item: 'عنصر',
              Items: 'عناصر',
              ConfirmDelete: 'هل أنت متأكد من حذف هذا السجل؟',
              Matchs: 'م يتم العثور على نتائج',
              FilterButton: 'فلتر',
              ClearButton: 'تفريغ',
              StartsWith: 'يبدأ بـ',
              EndsWith: 'ينتهي بـ',
              Contains: 'يحتوي على',
              Equal: 'يساوي',
              NotEqual: 'لا يساوي',
              LessThan: 'أقل من',
              LessThanOrEqual: 'أقل من أو يساوي',
              GreaterThan: 'أكبر من',
              GreaterThanOrEqual: 'أكبر من أو يساوي',
              ChooseDate: 'اختر تاريخ',
              EnterValue: 'إدخل القيمة',
              EmptyRecord: 'لا توجد سجلات لعرضها',
              Copy: 'نسخ',
              Group: 'جميع حسب هذا العمود',
              Ungroup: 'فك التجميع حسب هذا العمود',
              Export: 'تصدير',
              FirstPage: 'الصفحة الأولى',
              LastPage: 'الصفحة الأخيره',
              PreviousPage: 'الصفحة السابقة',
              NextPage: 'الصفحة التالية',
              SortAscending: 'ترتيب تصاعدي',
              SortDescending: 'ترتيب تنازلي',
              EditRecord: 'تعديل السجل',
              DeleteRecord: 'حذف السجل',
              FilterMenu: 'فلتر',
              SelectAll: 'تحديد الكل',
              Blanks: 'فراغات',
              FilterTrue: 'صحيح',
              FilterFalse: 'خاطئ',
              NoResult: 'لا توجد نتائج',
              ClearFilter: 'تفريغ الفلاتر',
              NumberFilter: 'فلاتر رقمية',
              TextFilter: 'فلاتر نصية',
              DateFilter: 'فلاتر تاريخ',
              MatchCase: 'حالة التطابق',
              Between: 'بين',
              CustomFilter: 'فلتر مخصص',
              CustomFilterPlaceHolder: 'أدخل القيمة',
              CustomFilterDatePlaceHolder: 'اختر تاريخ',
              AND: 'و',
              OR: 'أو',
              ShowRowsWhere: 'أظهر السجلات حيث:',
              currentPageInfo: '{0} من {1} صفحات',
              totalItemsInfo: '({0} عناصر)',
              totalItemInfo: '({0} عنصر)',
              firstPageTooltip: 'اذهب للصفحة الأولى',
              lastPageTooltip: 'اذهب للصفحة الأخيرة',
              nextPageTooltip: 'اذهب للصفحة التالية',
              previousPageTooltip: 'اذهب للصفحة السابقة',
              nextPagerTooltip: 'Go to next pager',
              previousPagerTooltip: 'Go to previous pager',
              pagerDropDown: 'عناصر لكل صفحة',
              pagerAllDropDown: 'عناصر',
              All: 'الكل',
              ExpandAll: 'توسيع الكل',
              CollapseAll: 'طي الكل',
              SaveButton: 'حفظ',
              OKButton: 'تطبيق',
              CancelButton: 'إلغاء',
            },
          }
        }
      case 'fr':
        return 'fr-FR';
      case 'tr':
        return 'tr-TR';
      case 'es':
        return 'es-ES';
      case 'fa':
        return 'fa-IR';
      case 'de':
        return 'de-DE';
      case 'hi':
        return 'hi-IN';
      case 'id':
        return 'id-ID';
      case 'pt':
        return 'pt-PT';
      case 'ur':
        return 'ur-PK';
      default:
        return 'en-US';
    }

  }
}
