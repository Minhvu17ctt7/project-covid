$(function () {
    const provinceSelect = $('#patient-province');
    const districtSelect = $('#patient-district');
    const wardSelect = $('#patient-ward');
    $('#datetimepicker4').datepicker();

    updateDistrictSelect(patient.province_id);
    updateWardSelect(patient.district_id);

    provinceSelect.change(function () {
        updateDistrictSelect($(this).val());
    });
    districtSelect.change(function () {
        updateWardSelect($(this).val());
    });

    function updateDistrictSelect(provinceId) {
        if (provinceId) {
            $.get(
                '/api/provinces/' + provinceId + '/districts',
                function (districts) {
                    districtSelect.empty();
                    districtSelect.append(
                        '<option value="">Chọn Quận/Huyện</option>',
                    );
                    $.each(districts, function (index, district) {
                        districtSelect.append(
                            `<option value="${district.id}" ${
                                district.id === patient.district_id &&
                                'selected'
                            } >${district.name}</option>`,
                        );
                    });
                    districtSelect.trigger('chosen:updated');
                },
            );
        } else {
            districtSelect.empty();
            districtSelect.append('<option value="">Chọn Quận/Huyện</option>');
            districtSelect.trigger('chosen:updated');
        }
        wardSelect.empty();
        wardSelect.append('<option value="">Chọn Phường/Xã</option>');
        wardSelect.trigger('chosen:updated');
    }
    function updateWardSelect(districtId) {
        if (districtId) {
            $.get('/api/districts/' + districtId + '/wards', function (wards) {
                wardSelect.empty();
                wardSelect.append('<option value="">Chọn Phường/Xã</option>');
                $.each(wards, function (index, ward) {
                    wardSelect.append(
                        `<option value="${ward.id}" ${
                            ward.id === patient.ward_id && 'selected'
                        } >${ward.name}</option>`,
                    );
                });
                wardSelect.trigger('chosen:updated');
            });
        } else {
            wardSelect.empty();
            wardSelect.append('<option value="">Chọn Phường/Xã</option>');
            wardSelect.trigger('chosen:updated');
        }
    }
});
