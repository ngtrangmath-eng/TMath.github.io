# Bảng xếp hạng thành tích học sinh

## Mục đích

File **bangxephang.md** dùng để mô tả phần hiển thị **thành tích học sinh dưới dạng bảng xếp hạng** trên trang web học tập. Bảng xếp hạng giúp học sinh thấy được kết quả nổi bật, tạo động lực học tập và khuyến khích các em cố gắng hoàn thành bài học, luyện tập và kiểm tra đánh giá.

---

## 1. Tiêu đề hiển thị trên trang web

**BẢNG XẾP HẠNG THÀNH TÍCH HỌC SINH**

Dòng mô tả ngắn:

> Chúc mừng các em học sinh đã hoàn thành bài kiểm tra với kết quả nổi bật. Hãy tiếp tục cố gắng để giữ vững thành tích của mình nhé!

---

## 2. Thông tin cần hiển thị trong bảng xếp hạng

| Thành phần | Ý nghĩa |
|---|---|
| Hạng | Vị trí xếp hạng của học sinh |
| Họ và tên | Tên học sinh |
| Trường | Trường học của học sinh |
| Lớp | Lớp của học sinh |
| Bài kiểm tra | Bài học hoặc bài kiểm tra đã hoàn thành |
| Điểm | Điểm số đạt được |
| Thời gian làm bài | Tổng thời gian hoàn thành bài |
| Huy hiệu | Thành tích ghi nhận |
| Ghi chú | Nhận xét ngắn gọn |

---

## 3. Bảng xếp hạng mẫu

| Hạng | Họ và tên | Trường | Lớp | Bài kiểm tra | Điểm | Thời gian làm bài | Huy hiệu | Ghi chú |
|---:|---|---|---|---|---:|---|---|---|
| 1 | Nguyễn Minh Anh | THCS Thị Trấn 2 | 6/1 | Bài 1. Tập hợp | 10 | 08 phút 35 giây | 🏆 Quán quân | Xuất sắc |
| 2 | Trần Gia Bảo | THCS Thị Trấn 2 | 6/2 | Bài 1. Tập hợp | 10 | 09 phút 10 giây | 🥈 Á quân | Rất tốt |
| 3 | Lê Hoàng Nam | THCS Thị Trấn 2 | 6/3 | Bài 1. Tập hợp | 9.75 | 09 phút 45 giây | 🥉 Hạng ba | Rất tốt |
| 4 | Phạm Ngọc Hân | THCS Thị Trấn 2 | 6/1 | Bài 1. Tập hợp | 9.5 | 10 phút 05 giây | ⭐ Ngôi sao học tập | Nỗ lực |
| 5 | Võ Thành Đạt | THCS Thị Trấn 2 | 6/4 | Bài 1. Tập hợp | 9.5 | 10 phút 40 giây | ⭐ Ngôi sao học tập | Nỗ lực |
| 6 | Huỳnh Bảo Trân | THCS Thị Trấn 2 | 6/2 | Bài 1. Tập hợp | 9.25 | 11 phút 15 giây | 🌟 Tiến bộ | Rất cố gắng |
| 7 | Đặng Quốc Huy | THCS Thị Trấn 2 | 6/5 | Bài 1. Tập hợp | 9 | 11 phút 50 giây | 🌟 Tiến bộ | Hoàn thành tốt |
| 8 | Bùi Khánh Linh | THCS Thị Trấn 2 | 6/3 | Bài 1. Tập hợp | 9 | 12 phút 20 giây | 🔥 Kiên trì | Đáng khen |
| 9 | Mai Tuấn Kiệt | THCS Thị Trấn 2 | 6/1 | Bài 1. Tập hợp | 8.75 | 12 phút 45 giây | 🔥 Kiên trì | Cố gắng |
| 10 | Đỗ Hà My | THCS Thị Trấn 2 | 6/4 | Bài 1. Tập hợp | 8.5 | 13 phút 05 giây | 👍 Hoàn thành tốt | Cần phát huy |

---

## 4. Quy tắc xếp hạng

Bảng xếp hạng được sắp xếp theo thứ tự ưu tiên:

1. Học sinh có **điểm cao hơn** xếp trước.
2. Nếu bằng điểm, học sinh có **thời gian làm bài ngắn hơn** xếp trước.
3. Nếu cùng điểm và cùng thời gian, học sinh **nộp bài sớm hơn** xếp trước.
4. Chỉ hiển thị **10 học sinh có thành tích cao nhất**.
5. Với học sinh làm bài nhiều lần, có thể lấy:
   - Kết quả cao nhất.
   - Hoặc kết quả mới nhất.
   - Hoặc hiển thị thêm cột “Lần làm bài”.

---

## 5. Gợi ý huy hiệu thành tích

| Điều kiện | Huy hiệu hiển thị |
|---|---|
| Hạng 1 | 🏆 Quán quân |
| Hạng 2 | 🥈 Á quân |
| Hạng 3 | 🥉 Hạng ba |
| Điểm từ 9 đến dưới 10 | ⭐ Ngôi sao học tập |
| Điểm từ 8 đến dưới 9 | 🔥 Kiên trì |
| Có tiến bộ so với lần trước | 🌟 Tiến bộ |
| Hoàn thành bài kiểm tra | 👍 Hoàn thành tốt |

---

## 6. Bố cục giao diện đề xuất

```text
┌──────────────────────────────────────────────────────────────┐
│              BẢNG XẾP HẠNG THÀNH TÍCH HỌC SINH               │
│       Top 10 học sinh có kết quả bài kiểm tra cao nhất       │
└──────────────────────────────────────────────────────────────┘

┌──────┬────────────────┬──────┬──────┬────────────┬──────────┬──────────┐
│ Hạng │ Họ và tên       │ Lớp  │ Điểm │ Thời gian  │ Huy hiệu │ Ghi chú  │
├──────┼────────────────┼──────┼──────┼────────────┼──────────┼──────────┤
│  1   │ Nguyễn Minh Anh │ 6/1  │ 10   │ 08:35      │ 🏆       │ Xuất sắc │
│  2   │ Trần Gia Bảo    │ 6/2  │ 10   │ 09:10      │ 🥈       │ Rất tốt  │
│  3   │ Lê Hoàng Nam    │ 6/3  │ 9.75 │ 09:45      │ 🥉       │ Rất tốt  │
└──────┴────────────────┴──────┴──────┴────────────┴──────────┴──────────┘
```

---

## 7. Giao diện thẻ vinh danh Top 3

Ngoài bảng xếp hạng, có thể thiết kế riêng khu vực Top 3 ở đầu trang.

### Hạng 1

```text
🏆 HẠNG 1
Nguyễn Minh Anh
Lớp 6/1
Điểm: 10
Thời gian: 08 phút 35 giây
```

### Hạng 2

```text
🥈 HẠNG 2
Trần Gia Bảo
Lớp 6/2
Điểm: 10
Thời gian: 09 phút 10 giây
```

### Hạng 3

```text
🥉 HẠNG 3
Lê Hoàng Nam
Lớp 6/3
Điểm: 9.75
Thời gian: 09 phút 45 giây
```

---

## 8. Gợi ý thiết kế giao diện

| Thành phần | Gợi ý thiết kế |
|---|---|
| Nền trang | Xanh nhạt, trắng hoặc vàng nhạt |
| Tiêu đề | Chữ lớn, màu xanh dương hoặc cam |
| Top 1 | Nền vàng, biểu tượng cúp vàng |
| Top 2 | Nền bạc, biểu tượng huy chương bạc |
| Top 3 | Nền cam nhạt, biểu tượng huy chương đồng |
| Các hạng còn lại | Nền trắng, viền xanh nhạt |
| Điểm số | Chữ đậm, màu nổi bật |
| Huy hiệu | Dùng icon sinh động |
| Bảng | Bo góc, đổ bóng nhẹ, dễ đọc |

---

## 9. Thông báo hiển thị

### Khi có bảng xếp hạng

> Chúc mừng các em học sinh đã đạt thành tích cao trong bài kiểm tra!

### Khi học sinh lọt vào bảng xếp hạng

> Tuyệt vời! Em đã có tên trong bảng xếp hạng thành tích học sinh.

### Khi học sinh chưa lọt vào bảng xếp hạng

> Em đã hoàn thành bài làm. Hãy luyện tập thêm để cải thiện điểm số và thời gian làm bài nhé!

### Khi chưa có dữ liệu

> Chưa có dữ liệu bảng xếp hạng. Hãy hoàn thành bài kiểm tra để ghi tên mình vào bảng thành tích nhé!

---

## 10. Dữ liệu mẫu cho hệ thống

| Trường dữ liệu | Giá trị mẫu |
|---|---|
| `rank` | 1 |
| `student_name` | Nguyễn Minh Anh |
| `school` | THCS Thị Trấn 2 |
| `class_name` | 6/1 |
| `test_name` | Bài 1. Tập hợp |
| `score` | 10 |
| `duration` | 08 phút 35 giây |
| `badge` | 🏆 Quán quân |
| `note` | Xuất sắc |

---

## 11. Gợi ý cấu trúc dữ liệu

```json
{
  "rank": 1,
  "student_name": "Nguyễn Minh Anh",
  "school": "THCS Thị Trấn 2",
  "class_name": "6/1",
  "test_name": "Bài 1. Tập hợp",
  "score": 10,
  "duration": "08 phút 35 giây",
  "badge": "🏆 Quán quân",
  "note": "Xuất sắc"
}
```

---

## 12. Gợi ý liên kết trên trang web

| Nút / Liên kết | Chức năng |
|---|---|
| `XEM BẢNG XẾP HẠNG` | Mở bảng thành tích |
| `QUAY LẠI BÀI HỌC` | Trở về bài học hiện tại |
| `LÀM LẠI BÀI KIỂM TRA` | Cho học sinh luyện tập lại |
| `VỀ MỤC LỤC` | Quay về trang mục lục Chương 1 |
| `TẢI BẢNG XẾP HẠNG` | Tải bảng xếp hạng nếu cần |

---

## 13. Prompt thiết kế trên Canva AI

Tạo giao diện bảng xếp hạng thành tích học sinh cho nền tảng học Toán trực tuyến. Thiết kế hiện đại, vui tươi, phù hợp học sinh THCS. Tiêu đề lớn: “BẢNG XẾP HẠNG THÀNH TÍCH HỌC SINH”. Phía trên có khu vực vinh danh Top 3 với cúp vàng, huy chương bạc và huy chương đồng. Bên dưới là bảng Top 10 gồm các cột: Hạng, Họ và tên, Trường, Lớp, Bài kiểm tra, Điểm, Thời gian làm bài, Huy hiệu, Ghi chú. Màu sắc chủ đạo xanh dương, vàng, cam và trắng. Bố cục bo góc, rõ ràng, có icon ngôi sao, cúp, pháo hoa, tạo cảm giác khích lệ học tập.

---

## 14. Lưu ý khi sử dụng bảng xếp hạng

- Bảng xếp hạng nên dùng để động viên học sinh, không tạo áp lực so sánh quá mức.
- Không nên công khai email hoặc thông tin cá nhân nhạy cảm của học sinh.
- Nếu hiển thị công khai, nên chỉ hiển thị tên, lớp, điểm và huy hiệu.
- Có thể cập nhật bảng xếp hạng sau mỗi lần học sinh hoàn thành bài kiểm tra.
- Giáo viên có thể dùng bảng xếp hạng để khen thưởng, động viên và hỗ trợ học sinh tiến bộ.
