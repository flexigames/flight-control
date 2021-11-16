export default function arrow(size = 8) {
  return {
    id: 'arrow',
    require: ['pos', 'rotate'],
    draw() {
      const α = deg2rad(this.angle);
      const { cos, sin } = Math;

      const pts = [
        vec2(0, 0),
        vec2(
          (cos(α + deg2rad(120)) * size) / 2,
          (sin(α + deg2rad(120)) * size) / 2
        ),
        vec2(cos(α) * size, sin(α) * size),
        vec2(
          (cos(α + deg2rad(240)) * size) / 2,
          (sin(α + deg2rad(240)) * size) / 2
        ),
      ];

      drawPolygon({
        pos: this.pos,
        pts,
        color: this.color,
      });
    },
  };
}
