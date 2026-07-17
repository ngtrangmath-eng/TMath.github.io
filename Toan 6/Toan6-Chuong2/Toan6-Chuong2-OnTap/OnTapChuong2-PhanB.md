# Ôn tập Chương II. Tính chia hết trong tập hợp các số tự nhiên — Luyện tập

## Mục đích

Phần luyện tập giúp học sinh vận dụng tổng hợp kiến thức Chương II qua các dạng:

- Xét tính chia hết.
- Phân tích ra thừa số nguyên tố.
- Tìm `ƯCLN`, `BCNN`.
- Rút gọn và tính toán với phân số.
- Giải bài toán thực tế.
- Giải bài toán số học có điều kiện đồng dư đơn giản.

---

## 1. Bảng kiến thức cần dùng

| Dạng bài | Kiến thức chính |
|---|---|
| Xét chia hết cho `2`, `5` | Xét chữ số tận cùng |
| Xét chia hết cho `3`, `9` | Xét tổng các chữ số |
| Phân tích ra thừa số nguyên tố | Chia liên tiếp cho các số nguyên tố |
| Tìm `ƯCLN` | Chọn thừa số chung, lấy số mũ nhỏ nhất |
| Tìm `BCNN` | Chọn thừa số chung và riêng, lấy số mũ lớn nhất |
| Chia nhiều nhóm nhất | Dùng `ƯCLN` |
| Cùng xảy ra sớm nhất | Dùng `BCNN` |
| Rút gọn phân số | Chia tử và mẫu cho `ƯCLN` |
| Quy đồng mẫu số | Thường dùng `BCNN` của các mẫu |

---

## 2. Bài 2.53 — Tìm số thỏa mãn điều kiện chia hết

Cho:

`x ∈ {50; 108; 189; 1 234; 2 019; 2 020}`.

Tìm `x` sao cho:

1. `x - 12` chia hết cho `2`.
2. `x - 27` chia hết cho `3`.
3. `x + 20` chia hết cho `5`.
4. `x + 36` chia hết cho `9`.

### Đáp án và hướng dẫn

#### Câu 1

Vì `12 ⋮ 2`, nên `x - 12` chia hết cho `2` khi `x` chia hết cho `2`.

Các số cần tìm:

`50; 108; 1 234; 2 020`.

#### Câu 2

Vì `27 ⋮ 3`, nên `x - 27` chia hết cho `3` khi `x` chia hết cho `3`.

Các số cần tìm:

`108; 189; 2 019`.

#### Câu 3

Vì `20 ⋮ 5`, nên `x + 20` chia hết cho `5` khi `x` chia hết cho `5`.

Các số cần tìm:

`50; 2 020`.

#### Câu 4

Vì `36 ⋮ 9`, nên `x + 36` chia hết cho `9` khi `x` chia hết cho `9`.

Các số cần tìm:

`108; 189`.

---

## 3. Bài 2.54 — Thực hiện phép tính và phân tích ra thừa số nguyên tố

### Câu 1

`14^2 + 5^2 + 2^2`.

### Lời giải

`14^2 + 5^2 + 2^2 = 196 + 25 + 4 = 225`.

Phân tích:

`225 = 9 · 25 = 3^2 · 5^2`.

### Câu 2

`400 : 5 + 40`.

### Lời giải

`400 : 5 + 40 = 80 + 40 = 120`.

Phân tích:

`120 = 2^3 · 3 · 5`.

---

## 4. Bài 2.55 — Tìm ƯCLN và BCNN

### Câu 1. Hai số `21` và `98`

Ta có:

- `21 = 3 · 7`;
- `98 = 2 · 7^2`.

Vậy:

- `ƯCLN(21, 98) = 7`;
- `BCNN(21, 98) = 2 · 3 · 7^2 = 294`.

### Câu 2. Hai số `36` và `54`

Ta có:

- `36 = 2^2 · 3^2`;
- `54 = 2 · 3^3`.

Vậy:

- `ƯCLN(36, 54) = 2 · 3^2 = 18`;
- `BCNN(36, 54) = 2^2 · 3^3 = 108`.

---

## 5. Bài 2.56 — Rút gọn phân số

### Câu 1. Phân số `27/123`

Ta có:

`ƯCLN(27, 123) = 3`.

Do đó:

`27/123 = (27 : 3)/(123 : 3) = 9/41`.

Vậy `27/123` chưa tối giản; phân số tối giản là `9/41`.

### Câu 2. Phân số `33/77`

Ta có:

`ƯCLN(33, 77) = 11`.

Do đó:

`33/77 = (33 : 11)/(77 : 11) = 3/7`.

Vậy `33/77` chưa tối giản; phân số tối giản là `3/7`.

---

## 6. Bài 2.57 — Thực hiện phép tính với phân số

### Câu 1

`5/12 + 3/16`.

Ta có:

`BCNN(12, 16) = 48`.

Do đó:

`5/12 + 3/16 = 20/48 + 9/48 = 29/48`.

### Câu 2

`4/15 - 2/9`.

Ta có:

`BCNN(15, 9) = 45`.

Do đó:

`4/15 - 2/9 = 12/45 - 10/45 = 2/45`.

---

## 7. Bài 2.58 — Chia túi trái cây

Có `12` quả cam, `18` quả xoài và `30` quả bơ. Chia đều mỗi loại quả vào các túi sao cho mỗi túi đều có cam, xoài và bơ. Hỏi chia được nhiều nhất bao nhiêu túi?

### Phân tích

Số túi phải là ước chung của `12`, `18`, `30`. Muốn số túi nhiều nhất, ta tìm:

`ƯCLN(12, 18, 30)`.

Ta có:

- `12 = 2^2 · 3`;
- `18 = 2 · 3^2`;
- `30 = 2 · 3 · 5`.

Vậy:

`ƯCLN(12, 18, 30) = 2 · 3 = 6`.

### Đáp án

Mai chia được nhiều nhất `6` túi.

Mỗi túi có:

- `2` quả cam;
- `3` quả xoài;
- `5` quả bơ.

---

## 8. Bài 2.59 — Lịch bảo dưỡng ô tô

Bác Nam thay dầu `3` tháng một lần và xoay lốp `6` tháng một lần. Bác làm cả hai việc cùng lúc vào tháng `4`. Hỏi lần gần nhất tiếp theo bác lại làm hai việc cùng lúc vào tháng nào?

### Lời giải

Khoảng thời gian ngắn nhất là:

`BCNN(3, 6) = 6` tháng.

Sau `6` tháng kể từ tháng `4` là tháng `10`.

### Đáp án

Bác Nam lại làm hai việc cùng lúc vào tháng `10` cùng năm.

---

## 9. Bài 2.60 — Hai số nguyên tố

Biết `79` và `97` là hai số nguyên tố. Tìm `ƯCLN` và `BCNN` của hai số đó.

### Lời giải

Hai số nguyên tố khác nhau không có ước chung nào khác `1`.

Vậy:

`ƯCLN(79, 97) = 1`.

Do đó:

`BCNN(79, 97) = 79 · 97 = 7 663`.

---

## 10. Bài 2.61 — Tìm số mũ

Biết hai số:

`3^a · 5^2` và `3^3 · 5^b`

có:

- `ƯCLN = 3^3 · 5^2`;
- `BCNN = 3^4 · 5^3`.

Tìm `a` và `b`.

### Lời giải

Đối với thừa số `3`:

- Số mũ trong `ƯCLN` là số mũ nhỏ nhất: `min(a, 3) = 3`.
- Số mũ trong `BCNN` là số mũ lớn nhất: `max(a, 3) = 4`.

Suy ra:

`a = 4`.

Đối với thừa số `5`:

- `min(2, b) = 2`;
- `max(2, b) = 3`.

Suy ra:

`b = 3`.

### Đáp án

`a = 4`, `b = 3`.

---

## 11. Bài 2.62 — Bài toán cổ về đàn vịt

Số vịt chưa đến `200` con và thỏa mãn:

- Xếp hàng `2` không vừa.
- Xếp hàng `3` còn thừa `1` con.
- Xếp hàng `4` không tròn.
- Xếp hàng `5` thiếu `1` con mới đầy.
- Xếp hàng `7` thì vừa đủ.

Tìm số vịt.

### Hướng dẫn

Vì xếp hàng `7` vừa đủ, số vịt là bội của `7` và nhỏ hơn `200`:

`7; 14; 21; ...; 196`.

Xếp hàng `5` thiếu `1` con mới đầy nên số vịt chia cho `5` dư `4`.

Các bội của `7` nhỏ hơn `200` và chia `5` dư `4` gồm:

`14; 49; 84; 119; 154; 189`.

Tiếp tục xét điều kiện chia cho `3` dư `1`, ta được:

`49; 154`.

Trong hai số đó, `49` không chia hết cho `2`, còn `154` chia hết cho `2`.

Vậy số vịt là:

`49`.

### Kiểm tra

- `49` chia `2` dư `1`.
- `49` chia `3` dư `1`.
- `49` chia `4` dư `1`.
- `49` chia `5` dư `4`.
- `49` chia hết cho `7`.

---

## 12. Bài tập bổ sung tổng hợp

### Bài 1

Trong các số `315; 420; 729; 1 250`, hãy xác định số nào chia hết cho:

1. `2`;
2. `3`;
3. `5`;
4. `9`.

### Đáp án gợi ý

- Chia hết cho `2`: `420; 1 250`.
- Chia hết cho `3`: `315; 420; 729`.
- Chia hết cho `5`: `315; 420; 1 250`.
- Chia hết cho `9`: `315; 729`.

### Bài 2

Phân tích các số `180`, `252` ra thừa số nguyên tố, rồi tìm `ƯCLN` và `BCNN`.

### Đáp án gợi ý

- `180 = 2^2 · 3^2 · 5`.
- `252 = 2^2 · 3^2 · 7`.

Vậy:

- `ƯCLN(180, 252) = 2^2 · 3^2 = 36`.
- `BCNN(180, 252) = 2^2 · 3^2 · 5 · 7 = 1 260`.

### Bài 3

Ba chiếc chuông lần lượt reo sau mỗi `12`, `18`, `30` phút. Lúc `7 giờ`, cả ba cùng reo. Hỏi lần tiếp theo cả ba cùng reo là lúc nào?

### Đáp án gợi ý

`BCNN(12, 18, 30) = 180` phút = `3` giờ.

Vậy lần tiếp theo cả ba cùng reo lúc `10 giờ`.

### Bài 4

Một lớp có `24` học sinh nam và `36` học sinh nữ. Chia thành nhiều nhóm nhất sao cho mỗi nhóm có số nam bằng nhau và số nữ bằng nhau.

### Đáp án gợi ý

`ƯCLN(24, 36) = 12`.

Chia được nhiều nhất `12` nhóm; mỗi nhóm có `2` nam và `3` nữ.

---

## 13. Bài tập sửa sai

Bạn An viết:

`36 = 2^2 · 3^2`, `54 = 2 · 3^3`.

Sau đó An kết luận:

`ƯCLN(36, 54) = 2^2 · 3^3 = 108`.

Bạn An sai ở đâu? Hãy sửa lại.

### Đáp án gợi ý

Khi tìm `ƯCLN`, mỗi thừa số nguyên tố chung phải lấy với **số mũ nhỏ nhất**, không phải số mũ lớn nhất.

Vậy:

`ƯCLN(36, 54) = 2^1 · 3^2 = 18`.

Số `108` là `BCNN(36, 54)`.

---

## 14. Gợi ý củng cố sau luyện tập

- Trước khi giải, xác định rõ bài toán hỏi “nhiều nhất” hay “ít nhất/cùng lúc”.
- Ghi đúng phân tích thừa số nguyên tố trước khi tìm `ƯCLN`, `BCNN`.
- Kiểm tra lại kết quả bằng quan hệ:

  `ƯCLN(a, b) · BCNN(a, b) = a · b`.

- Sau khi rút gọn phân số, kiểm tra tử và mẫu còn ước chung lớn hơn `1` hay không.
- Với bài toán có nhiều điều kiện chia dư, nên liệt kê theo điều kiện mạnh nhất trước.
