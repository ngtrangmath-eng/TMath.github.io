# Chuỗi học tập của học sinh

## Mục đích

Khối **chuỗi học tập** giúp học sinh theo dõi quá trình học của mình. Học sinh có thể nhìn thấy **tiến độ hoàn thành**, **huy hiệu nỗ lực** và **số ngày học liên tiếp** để có thêm động lực duy trì thói quen học tập mỗi ngày.

---

## 1. Thông tin hiển thị chính

| Thành phần | Nội dung hiển thị | Ý nghĩa |
|---|---|---|
| Tiến độ học tập | `75%` | Học sinh đã hoàn thành 75% nội dung học tập |
| Thanh tiến độ | Thanh màu xanh | Thể hiện mức độ hoàn thành bài học |
| Huy hiệu ngôi sao | `⭐` | Ghi nhận nỗ lực học tập |
| Chuỗi ngày học | `7 ngày` | Học sinh đã duy trì học tập 7 ngày liên tiếp |
| Biểu tượng ngọn lửa | `🔥` | Thể hiện tinh thần học tập đều đặn |

---

## 2. Bố cục đề xuất

Thiết kế khối hiển thị theo dạng **thẻ ngang bo góc**, nền sáng, hiện đại và dễ nhìn.

```text
┌──────────────────────────────────────────────────────────────┐
│ ⏱  Tiến độ học tập                                           │
│                                                              │
│     ████████████████░░░░░░        75%      ⭐      🔥 7 ngày │
│                                                              │
│                                      Chuỗi ngày học          │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Nội dung chi tiết từng phần

### 3.1. Tiến độ học tập

Hiển thị nhãn:

**Tiến độ học tập**

Bên dưới là thanh tiến độ thể hiện mức hoàn thành.

Ví dụ:

`75%`

Ý nghĩa:

Học sinh đã hoàn thành khoảng ba phần tư nội dung học tập của chương hoặc bài học.

---

### 3.2. Thanh tiến độ

Thanh tiến độ gồm hai phần:

- Phần đã hoàn thành: màu xanh dương.
- Phần chưa hoàn thành: màu xám nhạt.

Ví dụ:

```text
███████████████░░░░░
```

Có thể đặt số phần trăm ở bên phải thanh tiến độ.

---

### 3.3. Huy hiệu học tập

Biểu tượng:

`⭐`

Ý nghĩa:

- Ghi nhận sự cố gắng.
- Tạo động lực cho học sinh.
- Có thể dùng khi học sinh đạt mốc 50%, 75%, 100%.

Gợi ý hiển thị:

**Huy hiệu nỗ lực**

---

### 3.4. Chuỗi ngày học

Hiển thị nhãn:

**Chuỗi ngày học**

Kèm biểu tượng:

`🔥`

Ví dụ:

`🔥 7 ngày`

Ý nghĩa:

Học sinh đã duy trì việc học trong 7 ngày liên tiếp.

---

## 4. Mẫu nội dung hoàn chỉnh

```text
Tiến độ học tập: 75%

[███████████████░░░░░]

⭐ Huy hiệu nỗ lực

🔥 Chuỗi ngày học: 7 ngày

Em đang học rất đều đặn. Hãy tiếp tục duy trì chuỗi ngày học của mình nhé!
```

---

## 5. Gợi ý câu động viên

> Em đang học rất đều đặn. Hãy tiếp tục duy trì chuỗi ngày học của mình nhé!

Hoặc:

> Cố gắng thêm một chút nữa, em sắp hoàn thành chương học rồi!

---

## 6. Gợi ý thiết kế giao diện

| Thành phần | Gợi ý thiết kế |
|---|---|
| Nền thẻ | Trắng hoặc xanh rất nhạt |
| Bo góc | Lớn, mềm mại |
| Thanh tiến độ | Xanh dương nổi bật |
| Phần chưa hoàn thành | Xám nhạt |
| Biểu tượng | Đồng hồ, ngôi sao, ngọn lửa |
| Chữ chính | Đậm, dễ đọc |
| Tỉ lệ hiển thị | Ngang, giống một thanh trạng thái học tập |

---

## 7. Prompt thiết kế trên Canva AI

Tạo một thẻ giao diện học tập hiện đại, bo góc mềm mại, nền trắng xanh nhạt. Bên trái có biểu tượng đồng hồ màu xanh và dòng chữ “Tiến độ học tập”. Ở giữa có thanh tiến độ màu xanh dương hiển thị 75%, kèm biểu tượng ngôi sao vàng. Bên phải có biểu tượng ngọn lửa màu cam và dòng chữ “Chuỗi ngày học 7 ngày”. Phong cách thân thiện với học sinh THCS, rõ ràng, dễ nhìn, màu sắc tươi sáng.

---

## 8. Dữ liệu mẫu

| Trường dữ liệu | Giá trị |
|---|---|
| `progress_label` | Tiến độ học tập |
| `progress_percent` | 75% |
| `streak_label` | Chuỗi ngày học |
| `streak_days` | 7 ngày |
| `badge_icon` | ⭐ |
| `streak_icon` | 🔥 |
| `timer_icon` | ⏱ |
| `message` | Em đang học rất đều đặn. Hãy tiếp tục duy trì chuỗi ngày học của mình nhé! |
