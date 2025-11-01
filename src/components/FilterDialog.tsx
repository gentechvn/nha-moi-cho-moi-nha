import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface FilterDialogProps {
  onFilterChange: (filters: FilterState) => void;
  currentFilters: FilterState;
}

export interface FilterState {
  status: string;
  minPrice: number;
  maxPrice: number;
  minArea: number;
  maxArea: number;
  location: string;
}

const FilterDialog = ({ onFilterChange, currentFilters }: FilterDialogProps) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(currentFilters);

  const handleApply = () => {
    onFilterChange(filters);
    setOpen(false);
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      status: "all",
      minPrice: 0,
      maxPrice: 3000,
      minArea: 0,
      maxArea: 150,
      location: "all",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          Bộ lọc
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Bộ lọc tìm kiếm</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Tình trạng */}
          <div className="space-y-2">
            <Label>Tình trạng</Label>
            <Select value={filters.status} onValueChange={(value) => setFilters({ ...filters, status: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn tình trạng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="selling">Đang mở bán</SelectItem>
                <SelectItem value="upcoming">Sắp mở bán</SelectItem>
                <SelectItem value="completed">Đã bàn giao</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Khu vực */}
          <div className="space-y-2">
            <Label>Khu vực</Label>
            <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn khu vực" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="hanoi">Hà Nội</SelectItem>
                <SelectItem value="hochiminh">TP. Hồ Chí Minh</SelectItem>
                <SelectItem value="danang">Đà Nẵng</SelectItem>
                <SelectItem value="others">Tỉnh khác</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Giá */}
          <div className="space-y-3">
            <Label>Khoảng giá (triệu VNĐ)</Label>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium w-16">{filters.minPrice}</span>
              <Slider
                value={[filters.minPrice]}
                onValueChange={([value]) => setFilters({ ...filters, minPrice: value })}
                max={3000}
                step={50}
                className="flex-1"
              />
              <span className="text-sm font-medium w-16">{filters.maxPrice}</span>
            </div>
            <Slider
              value={[filters.maxPrice]}
              onValueChange={([value]) => setFilters({ ...filters, maxPrice: value })}
              max={3000}
              step={50}
            />
          </div>

          {/* Diện tích */}
          <div className="space-y-3">
            <Label>Diện tích (m²)</Label>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium w-16">{filters.minArea}</span>
              <Slider
                value={[filters.minArea]}
                onValueChange={([value]) => setFilters({ ...filters, minArea: value })}
                max={150}
                step={5}
                className="flex-1"
              />
              <span className="text-sm font-medium w-16">{filters.maxArea}</span>
            </div>
            <Slider
              value={[filters.maxArea]}
              onValueChange={([value]) => setFilters({ ...filters, maxArea: value })}
              max={150}
              step={5}
            />
          </div>
        </div>

        <div className="flex gap-2 pt-4 border-t">
          <Button variant="outline" onClick={handleReset} className="flex-1 gap-2">
            <X className="w-4 h-4" />
            Xóa bộ lọc
          </Button>
          <Button onClick={handleApply} className="flex-1">
            Áp dụng
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
