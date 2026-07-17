# Bài 12. Bội chung, bội chung nhỏ nhất — Kiến thức trọng tâm

## Giới thiệu

Bài học giúp học sinh nhận biết **bội chung**, **bội chung nhỏ nhất** của hai hay nhiều số tự nhiên khác `0`; biết tìm `BCNN` bằng cách liệt kê các bội hoặc phân tích các số ra thừa số nguyên tố.

Từ kiến thức về bội chung nhỏ nhất, học sinh có thể tìm các bội chung theo yêu cầu, giải các bài toán về những hoạt động lặp lại theo chu kì và quy đồng mẫu số để thực hiện phép tính với phân số.

---

## 1. Mục tiêu bài học

Sau bài học, học sinh cần đạt được các mục tiêu sau:

1. Nhận biết được **bội chung** của hai hay nhiều số tự nhiên khác `0`.
2. Xác định được **bội chung nhỏ nhất** của hai hay nhiều số tự nhiên.
3. Sử dụng đúng các kí hiệu `BC(a, b)` và `BCNN(a, b)`.
4. Tìm được `BCNN` bằng cách liệt kê các bội hoặc phân tích các số ra thừa số nguyên tố.
5. Tìm được các bội chung thông qua các bội của `BCNN`.
6. Nhận biết và vận dụng được một số trường hợp đặc biệt của `BCNN`.
7. Vận dụng `BCNN` để quy đồng mẫu số, tính toán với phân số và giải các bài toán thực tế có tính chu kì.

---

## 2. Ghi nhớ cốt lõi

### Bội chung

**Bội chung của hai hay nhiều số** là bội của tất cả các số đó.

Kí hiệu:

- `BC(a, b)` là tập hợp các bội chung của `a` và `b`.
- `BC(a, b, c)` là tập hợp các bội chung của `a`, `b` và `c`.

Ví dụ:

- `B(4) = {0; 4; 8; 12; 16; 20; 24; 28; ...}`.
- `B(6) = {0; 6; 12; 18; 24; 30; ...}`.

Các số `0; 12; 24; ...` vừa là bội của `4`, vừa là bội của `6`, nên:

`BC(4, 6) = {0; 12; 24; 36; ...}`.

### Bội chung nhỏ nhất

**Bội chung nhỏ nhất của hai hay nhiều số** là số nhỏ nhất khác `0` trong tập hợp các bội chung của các số đó.

Kí hiệu:

`BCNN(a, b)` là bội chung nhỏ nhất của `a` và `b`.

Từ ví dụ trên, số nhỏ nhất khác `0` trong `BC(4, 6)` là `12`, nên:

`BCNN(4, 6) = 12`.

> **Chú ý:** Trong bài học này, ta xét bội chung của các số tự nhiên khác `0`. Số `0` luôn là một bội chung nhưng không được chọn làm `BCNN`.

---

## 3. Kí hiệu và cách đọc

| Kí hiệu | Cách đọc | Ý nghĩa |
|---|---|---|
| `BC(a, b)` | Bội chung của `a` và `b` | Một tập hợp |
| `BCNN(a, b)` | Bội chung nhỏ nhất của `a` và `b` | Một số |
| `x ∈ BC(a, b)` | `x` thuộc tập hợp bội chung của `a` và `b` | `x ⋮ a` và `x ⋮ b` |
| `BCNN(a, b) = m` | Bội chung nhỏ nhất của `a`, `b` bằng `m` | `m` là bội chung dương nhỏ nhất |

> **Phân biệt:** `BC(a, b)` là **tập hợp**, còn `BCNN(a, b)` là **một số**.

---

## 4. Tìm BCNN bằng cách liệt kê các bội

### Các bước thực hiện

1. Viết một số bội của từng số theo thứ tự tăng dần.
2. Tìm những số xuất hiện trong tất cả các tập hợp bội để lập tập hợp bội chung.
3. Chọn số nhỏ nhất khác `0` trong tập hợp bội chung.

### Ví dụ

Tìm `BCNN(6, 9)`.

Ta có:

- `B(6) = {0; 6; 12; 18; 24; 30; 36; ...}`.
- `B(9) = {0; 9; 18; 27; 36; 45; ...}`.

Suy ra:

`BC(6, 9) = {0; 18; 36; 54; ...}`.

Vậy:

`BCNN(6, 9) = 18`.

---

## 5. Một số trường hợp đặc biệt

### Trường hợp 1. Số lớn nhất là bội của các số còn lại

Nếu `a ⋮ b` thì:

`BCNN(a, b) = a`.

Ví dụ:

Vì `21 ⋮ 7` nên:

`BCNN(7, 21) = 21`.

### Trường hợp 2. Một trong các số bằng `1`

Với mọi số tự nhiên `a` khác `0`:

`BCNN(a, 1) = a`.

Với ba số:

`BCNN(a, b, 1) = BCNN(a, b)`.

Ví dụ:

`BCNN(12, 1) = 12`.

### Trường hợp 3. Các số đôi một nguyên tố cùng nhau

Nếu các số đã cho không có thừa số nguyên tố chung thì `BCNN` bằng tích của các số đó.

Ví dụ:

Vì `ƯCLN(8, 15) = 1`, nên:

`BCNN(8, 15) = 8 · 15 = 120`.

---

## 6. Tìm BCNN bằng cách phân tích ra thừa số nguyên tố

Muốn tìm `BCNN` của hai hay nhiều số lớn hơn `1`, ta thực hiện ba bước:

1. Phân tích mỗi số ra thừa số nguyên tố.
2. Chọn các thừa số nguyên tố **chung và riêng**.
3. Lập tích các thừa số đã chọn, mỗi thừa số lấy với **số mũ lớn nhất**. Tích đó là `BCNN` cần tìm.

### Ví dụ 1

Tìm `BCNN(75, 90)`.

Ta có:

- `75 = 3 · 5^2`.
- `90 = 2 · 3^2 · 5`.

Các thừa số nguyên tố chung và riêng là `2`, `3`, `5`.

- Số mũ lớn nhất của `2` là `1`.
- Số mũ lớn nhất của `3` là `2`.
- Số mũ lớn nhất của `5` là `2`.

Vậy:

`BCNN(75, 90) = 2 · 3^2 · 5^2 = 450`.

### Ví dụ 2

Tìm `BCNN(18, 24, 40)`.

Ta có:

- `18 = 2 · 3^2`.
- `24 = 2^3 · 3`.
- `40 = 2^3 · 5`.

Các thừa số nguyên tố cần chọn là `2`, `3`, `5`.

- Số mũ lớn nhất của `2` là `3`.
- Số mũ lớn nhất của `3` là `2`.
- Số mũ lớn nhất của `5` là `1`.

Vậy:

`BCNN(18, 24, 40) = 2^3 · 3^2 · 5 = 360`.

---

## 7. Tìm bội chung từ bội chung nhỏ nhất

Mọi bội chung của các số đều là bội của `BCNN` của các số đó.

Do đó, để tìm các bội chung của hai hay nhiều số, ta có thể:

1. Tìm `BCNN` của các số đó.
2. Tìm các bội của `BCNN` vừa tìm được.

### Ví dụ

Tìm các bội chung nhỏ hơn `900` của `18`, `24` và `40`.

Ta có:

`BCNN(18, 24, 40) = 360`.

Các bội của `360` nhỏ hơn `900` là:

`0; 360; 720`.

Vậy các bội chung nhỏ hơn `900` của `18`, `24`, `40` là:

`0; 360; 720`.

> Khi đề bài yêu cầu các bội chung **dương**, ta không liệt kê số `0`.

---

## 8. Kiến thức bổ sung

### Quan hệ giữa ƯCLN và BCNN

Với hai số tự nhiên `a`, `b` khác `0`:

`ƯCLN(a, b) · BCNN(a, b) = a · b`.

Do đó:

`BCNN(a, b) = (a · b) : ƯCLN(a, b)`.

### Tính chất chia hết liên quan đến BCNN

Nếu một số `A` chia hết cho cả `m` và `n`, thì `A` chia hết cho `BCNN(m, n)`.

Nếu:

`A ⋮ m` và `A ⋮ n`

thì:

`A ⋮ BCNN(m, n)`.

### Kí hiệu viết gọn

Khi cần viết gọn, có thể viết:

`BCNN(a, b) = [a, b]`.

Ví dụ:

`[6, 8] = 24`.

---

## 9. Vận dụng BCNN để quy đồng mẫu số

Để quy đồng mẫu số hai hay nhiều phân số, ta có thể chọn mẫu chung là một bội chung của các mẫu số. Thông thường, nên chọn mẫu chung là `BCNN` của các mẫu số để các số tính được nhỏ và gọn hơn.

### Ví dụ 1

Quy đồng mẫu hai phân số `5/8` và `7/12`.

Ta có:

`BCNN(8, 12) = 24`.

Do đó:

`5/8 = (5 · 3)/(8 · 3) = 15/24`.

`7/12 = (7 · 2)/(12 · 2) = 14/24`.

### Ví dụ 2

Quy đồng mẫu các phân số `3/8`, `5/9` và `1/6`.

Ta có:

- `8 = 2^3`.
- `9 = 3^2`.
- `6 = 2 · 3`.

Suy ra:

`BCNN(8, 9, 6) = 2^3 · 3^2 = 72`.

Vậy:

- `3/8 = 27/72`.
- `5/9 = 40/72`.
- `1/6 = 12/72`.

---

## 10. Ví dụ thực tế có hướng dẫn

### Ví dụ 1. Mua các gói đồ dùng

Đĩa giấy được đóng thành gói `4` cái, cốc giấy được đóng thành gói `6` cái. Mai muốn mua cùng một số lượng đĩa và cốc, đồng thời số gói mỗi loại là ít nhất.

Số lượng mỗi loại phải là bội chung của `4` và `6`. Số lượng nhỏ nhất khác `0` là:

`BCNN(4, 6) = 12`.

Vậy Mai mua ít nhất `12` đĩa và `12` cốc, tương ứng `3` gói đĩa và `2` gói cốc.

### Ví dụ 2. Lịch bảo dưỡng máy

Máy A được bảo dưỡng định kì `6` tháng một lần, máy B được bảo dưỡng định kì `9` tháng một lần. Hai máy vừa được bảo dưỡng cùng lúc. Hỏi sau ít nhất bao nhiêu tháng hai máy lại được bảo dưỡng cùng thời điểm?

Khoảng thời gian cần tìm là:

`BCNN(6, 9) = 18`.

Vậy sau ít nhất `18` tháng, hai máy lại được bảo dưỡng cùng lúc.

### Ví dụ 3. Xe buýt cùng xuất bến

Ba tuyến xe buýt xuất bến định kì lần lượt `15` phút, `9` phút và `10` phút. Lúc `10 giờ 35 phút`, cả ba tuyến cùng xuất bến. Hỏi lần tiếp theo cả ba tuyến cùng xuất bến là lúc nào?

Ta có:

`BCNN(15, 9, 10) = 90` phút.

`90` phút = `1 giờ 30 phút`.

Vậy lần tiếp theo cả ba tuyến cùng xuất bến là lúc `12 giờ 05 phút`.

---

## 11. Sơ đồ tư duy mini

- **Bội chung** → bội của tất cả các số.
- **BCNN** → bội chung dương nhỏ nhất.
- **Liệt kê bội** → tìm từng tập hợp bội → chọn phần chung → lấy số nhỏ nhất khác `0`.
- **Phân tích thừa số nguyên tố** → chọn thừa số chung và riêng → lấy số mũ lớn nhất.
- **Tìm BC** → tìm các bội của `BCNN`.
- **Trường hợp đặc biệt** → số lớn nhất là bội của các số còn lại thì `BCNN` là số lớn nhất.
- **Quy đồng phân số** → thường chọn `BCNN` của các mẫu làm mẫu chung.
- **Bài toán thực tế** → các hoạt động lặp lại, cùng xảy ra sớm nhất, mua số lượng ít nhất.

---

## 12. Tự kiểm tra nhanh

### Câu 1

Tìm `BCNN(8, 12)` bằng cách liệt kê các bội.

**Đáp án:**

- `B(8) = {0; 8; 16; 24; 32; ...}`.
- `B(12) = {0; 12; 24; 36; ...}`.

Vậy `BCNN(8, 12) = 24`.

### Câu 2

Tìm `BCNN(15, 54)` bằng cách phân tích ra thừa số nguyên tố.

**Đáp án:**

- `15 = 3 · 5`.
- `54 = 2 · 3^3`.

Vậy:

`BCNN(15, 54) = 2 · 3^3 · 5 = 270`.

### Câu 3

Quy đồng mẫu hai phân số `7/9` và `4/15`.

**Đáp án:**

`BCNN(9, 15) = 45`.

Do đó:

- `7/9 = 35/45`.
- `4/15 = 12/45`.

---

## 13. Những lỗi học sinh dễ mắc

- Nhầm `BC(a, b)` là một số thay vì một tập hợp.
- Nhầm `BCNN(a, b)` là một tập hợp thay vì một số.
- Chọn số `0` làm `BCNN`, trong khi `BCNN` phải là số nhỏ nhất **khác `0`**.
- Khi phân tích ra thừa số nguyên tố, chỉ chọn các thừa số chung và bỏ quên thừa số riêng.
- Lấy số mũ nhỏ nhất thay vì số mũ lớn nhất khi tìm `BCNN`.
- Khi tìm bội chung, liệt kê các ước của `BCNN` thay vì các bội của `BCNN`.
- Nhầm lẫn giữa bài toán cần tìm `ƯCLN` và bài toán cần tìm `BCNN`.
- Quy đồng mẫu số bằng một số không chia hết cho tất cả các mẫu số.
